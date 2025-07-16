import cv2
import numpy as np
from tensorflow.keras.models import load_model
import pickle

# === Load Model and Label Encoder ===
model = load_model("full_disease_model.h5")

with open("full_label_encoder.pkl", "rb") as f:
    le = pickle.load(f)

# === Optional: Disease Info ===
disease_info = {
    "Pepper_bell___Bacterial_spot": {
        "severity": "High",
        "description": "Small, water-soaked spots on leaves and fruit, turning brown/black. Can cause defoliation.",
        "treatment": "Remove infected plants. Use copper-based bactericides preventatively. Rotate crops.",
        "prevention": [
            "Use disease-free seeds/transplants",
            "Avoid overhead irrigation (water at base)",
            "Sanitize tools and hands after handling infected plants",
            "Provide good air circulation"
        ]
    },
    "Pepper_bell___healthy": {
        "severity": "None",
        "description": "No visible symptoms of disease or pests. Leaves are green and firm, plant shows robust growth.",
        "treatment": "No treatment needed. Continue good cultural practices.",
        "prevention": [
            "Maintain regular watering and fertilization",
            "Monitor for early signs of stress or pests",
            "Ensure adequate sunlight",
            "Use preventive spraying (e.g., neem oil) if desired for general health"
        ]
    },
    "Potato___Early_blight": {
        "severity": "Medium",
        "description": "Dark brown to black spots with concentric rings (target-like) on older leaves. Often surrounded by a yellow halo.",
        "treatment": "Apply fungicides containing chlorothalonil or mancozeb. Remove infected foliage.",
        "prevention": [
            "Practice crop rotation (avoid planting potatoes/tomatoes in same spot for 2-3 years)",
            "Ensure good air circulation between plants",
            "Maintain adequate soil fertility",
            "Avoid overhead irrigation, especially in the evening"
        ]
    },
    "Potato___healthy": {
        "severity": "None",
        "description": "No visible symptoms of disease or pests. Leaves are green and firm, plant shows robust growth.",
        "treatment": "No treatment needed. Continue good cultural practices.",
        "prevention": [
            "Maintain regular watering and fertilization",
            "Monitor for early signs of stress or pests",
            "Ensure adequate sunlight",
            "Use healthy seed potatoes"
        ]
    },
    "Potato___Late_blight": {
        "severity": "High",
        "description": "Irregular, water-soaked lesions on leaves, often starting at leaf tips or edges. White, fuzzy growth may appear on the underside of leaves in humid conditions. Rapidly spreads and causes plant collapse.",
        "treatment": "Apply systemic fungicides (e.g., containing mefenoxam, propamocarb, fluazinam) immediately upon detection. Remove and destroy infected plants to prevent spread.",
        "prevention": [
            "Plant resistant potato varieties if available",
            "Ensure good field drainage and avoid waterlogging",
            "Avoid planting too early in wet, cool conditions",
            "Space plants adequately for air circulation",
            "Scout regularly, especially during cool, moist weather"
        ]
    },
    "Tomato___Target_Spot": {
        "severity": "Medium",
        "description": "Small, dark, circular spots on leaves with a distinct dark border and often a lighter center, resembling a 'target' or bullseye. Can also appear on stems and fruit.",
        "treatment": "Fungicides containing azoxystrobin, chlorothalonil, or copper can help manage it. Remove infected lower leaves.",
        "prevention": [
            "Remove and destroy infected plant debris at the end of the season",
            "Ensure good air circulation around plants by proper spacing and pruning",
            "Avoid overhead watering, or water early in the day so foliage can dry",
            "Rotate crops with non-solanaceous plants"
        ]
    },
    "Tomato___Tomato_mosaic_virus": {
        "severity": "High",
        "description": "Causes mosaic patterns (alternating light and dark green patches) on leaves, leaf distortion, curling, and stunted growth. Fruit may be malformed or discolored.",
        "treatment": "No chemical cure. Immediately remove and destroy infected plants to prevent spread. Do not compost infected plants.",
        "prevention": [
            "Use certified virus-free seeds or healthy transplants",
            "Sanitize tools, hands, and clothing after handling plants (especially if smoking, as it can be transmitted by tobacco)",
            "Control insect vectors (though less common for TMV itself, good practice)",
            "Choose resistant varieties when possible"
        ]
    },
    "Tomato___Tomato_YellowLeaf_Curl_Virus": {
        "severity": "High",
        "description": "Characterized by severe upward curling and yellowing of younger leaves, stunted plant growth, and a significant reduction or complete loss of fruit set. Transmitted by whiteflies.",
        "treatment": "No chemical cure. Remove and destroy infected plants immediately to prevent further spread by whiteflies.",
        "prevention": [
            "Control whitefly populations (use insecticidal soaps, neem oil, or beneficial insects)",
            "Use resistant tomato varieties if available",
            "Use reflective mulches (e.g., silver plastic) to deter whiteflies",
            "Use row covers during early growth stages to protect from whiteflies"
        ]
    },
    "Tomato___Bacterial_spot": {
        "severity": "High",
        "description": "Small, water-soaked spots on leaves, stems, and fruit that enlarge, turn dark, and may become sunken. On fruit, spots are scabby and surrounded by a halo.",
        "treatment": "Copper-based bactericides can offer some suppression but are not curative. Remove heavily infected plant parts. Good sanitation is key.",
        "prevention": [
            "Use disease-free seeds/transplants",
            "Avoid overhead irrigation; water at the base of plants",
            "Sanitize tools and hands after handling potentially infected plants",
            "Practice crop rotation (avoid planting tomatoes/peppers in the same spot for several years)"
        ]
    },
    "Tomato___Early_blight": {
        "severity": "Medium",
        "description": "Dark brown to black spots with concentric rings (target-like) on older leaves. Often surrounded by a yellow halo. Can also affect stems and fruit.",
        "treatment": "Apply fungicides containing chlorothalonil or mancozeb. Remove infected foliage and ensure good air circulation.",
        "prevention": [
            "Practice crop rotation (avoid planting tomatoes/potatoes in same spot for 2-3 years)",
            "Ensure good air circulation between plants by proper spacing and pruning",
            "Maintain adequate soil fertility",
            "Avoid overhead irrigation, especially in the evening"
        ]
    },
    "Tomato___Healthy": {
        "severity": "None",
        "description": "No visible symptoms of disease or pests. Leaves are green, firm, and the plant shows vigorous growth with healthy fruit set.",
        "treatment": "No treatment needed. Continue good cultural practices.",
        "prevention": [
            "Maintain regular watering and balanced fertilization",
            "Monitor plant health daily for early signs of issues",
            "Ensure adequate sunlight and proper air circulation",
            "Use preventive organic sprays (e.g., compost tea, dilute neem oil) for overall plant vigor if desired"
        ]
    },
    "Tomato___Late_blight": {
        "severity": "High",
        "description": "Large, irregular, water-soaked lesions on leaves that rapidly turn brown/black. White, fuzzy fungal growth may be visible on the underside of leaves in humid conditions. Leads to rapid plant collapse and fruit rot.",
        "treatment": "Apply systemic fungicides (e.g., containing mefenoxam, propamocarb, fluazinam) immediately upon detection. Remove and destroy infected plants and fruit to prevent rapid spread.",
        "prevention": [
            "Plant resistant tomato varieties if available",
            "Ensure good air circulation and avoid crowded plantings",
            "Water plants at the base, avoiding wetting foliage, especially in humid conditions",
            "Scout regularly, especially during cool, moist weather (below 75°F with high humidity)",
            "Remove and destroy any volunteer potato or tomato plants"
        ]
    },
    "Tomato___Leaf_Mold": {
        "severity": "Medium",
        "description": "Causes velvety, olive-green to brown spots on the underside of older leaves. On the upper surface, corresponding areas appear yellow. Primarily a greenhouse problem.",
        "treatment": "Improve ventilation and reduce humidity. Fungicides containing chlorothalonil or mancozeb can be used if severe.",
        "prevention": [
            "Increase plant spacing to improve air circulation",
            "Ensure good ventilation in greenhouses (e.g., using fans)",
            "Avoid overhead watering; water early in the day",
            "Remove infected leaves to reduce spore inoculum"
        ]
    },
    "Tomato___Septoria_leaf_spot": {
        "severity": "Medium",
        "description": "Numerous small, circular spots (1/8-1/4 inch) with dark brown borders and tan or gray centers on leaves. Tiny black dots (fruiting bodies) are often visible in the center of the spots.",
        "treatment": "Fungicides containing chlorothalonil or copper can help. Remove lower infected leaves to reduce spread.",
        "prevention": [
            "Remove and destroy infected lower leaves as soon as symptoms appear",
            "Sanitize tools after working with infected plants",
            "Avoid overhead watering to keep foliage dry",
            "Ensure good air circulation around plants",
            "Practice crop rotation"
        ]
    },
    "Tomato___Spider_mites_Two_spotted_spider_mite": {
        "severity": "Medium",
        "description": "Tiny yellow or white specks (stippling) on the upper surface of leaves. Fine webbing may be visible on the underside of leaves, especially at leaf axils. Leaves may turn bronze and drop prematurely.",
        "treatment": "Spray with insecticidal soaps, horticultural oils (like neem oil), or miticides. Introduce predatory mites (natural enemies) in severe cases.",
        "prevention": [
            "Regularly inspect the underside of leaves for early detection",
            "Maintain good plant hygiene; remove weeds that can harbor mites",
            "Ensure adequate humidity (spider mites thrive in dry conditions)",
            "Rinse plants with a strong stream of water to dislodge mites"
        ]
    }
}


# === Predict Function ===
def predict_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (128, 128))
    img = img / 255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)
    class_index = np.argmax(prediction)
    class_name = le.inverse_transform([class_index])[0]

    print(f"🎯 Predicted Class: {class_name}")
    
    info = disease_info.get(class_name)
    if info:
        print(f"📝 Description: {info['description']}")
        print(f"⚠️ Severity: {info['severity']}")
        print(f"💊 Treatment: {info['treatment']}")
        print("🛡️ Prevention Tips:")
        for tip in info["prevention"]:
            print(f"  - {tip}")
    else:
        print("ℹ️ No info available for this disease yet.")

# === Run Test ===
predict_image("00a7c269-3476-4d25-b744-44d6353cd921___GCREC_Bact.Sp 5807.JPG")
