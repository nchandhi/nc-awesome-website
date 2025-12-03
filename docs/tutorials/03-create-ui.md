# Step 5: Create User Interface

**Duration:** 50 minutes | **Level:** 🟡 Intermediate

---

## 🎯 Objective

Build a simple, intuitive interface for users to interact with your AI model.

---

## 🖥️ UI Options

| Option | Best For | Tech Stack | Time |
|--------|----------|------------|------|
| **Streamlit** | Quick prototypes | Python only | 20 min |
| **Gradio** | ML demos | Python only | 15 min |
| **Flask/FastAPI** | Production apps | Python + HTML | 60 min |
| **React + API** | Enterprise | JavaScript + Python | 4+ hours |

---

## 🚀 Quick UI with Streamlit

```python
import streamlit as st
from transformers import pipeline

# Load model
classifier = pipeline("sentiment-analysis")

# UI
st.title("🤖 AI Sentiment Analyzer")
text = st.text_area("Enter text to analyze:")

if st.button("Analyze"):
    result = classifier(text)[0]
    st.write(f"**Sentiment**: {result['label']}")
    st.write(f"**Confidence**: {result['score']:.2%}")
```

**Run**: `streamlit run app.py`

---

## 🎨 UI Best Practices

- ✅ **Simple Layout**: One primary action per screen
- ✅ **Clear Labels**: "Analyze Text" not "Submit"
- ✅ **Fast Feedback**: Show loading spinners
- ✅ **Error Handling**: Graceful failure messages
- ✅ **Mobile-Friendly**: Responsive design

---

## 📱 Example Layouts

### Chatbot
```
[Chat History]
User: How's the weather?
Bot: Let me check...

[Input Box: "Type message..."] [Send]
```

### Image Classifier
```
[Upload Image Button]
[Preview of uploaded image]
[Analyze] button
[Results: Dog (95% confidence)]
```

---

## 🚀 [Next: Test & Validate →](./04-test-validate.md)
