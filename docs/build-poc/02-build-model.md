# Step 4: Build Your AI Model

**Duration:** 60 minutes | **Level:** 🟡 Intermediate

---

## 🎯 Objective

Train and validate your AI model using your prepared data.

---

## 🏗️ Build Process

| Phase | Actions | Tools |
|-------|---------|-------|
| **1. Prepare** | Split data (80/20 train/test) | `sklearn.model_selection` |
| **2. Choose Algorithm** | Classification, regression, or NLP | Scikit-learn, TensorFlow, PyTorch |
| **3. Train** | Fit model to training data | Cloud notebooks or local |
| **4. Evaluate** | Test on validation set | Confusion matrix, metrics |
| **5. Tune** | Optimize hyperparameters | Grid search, AutoML |

---

## 🚀 Quick Start Code

### Option 1: Pre-trained Model (Fastest)
```python
from transformers import pipeline

# Use pre-trained model
classifier = pipeline("sentiment-analysis")
result = classifier("I love this product!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.99}]
```

### Option 2: Train Custom Model
```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy:.2%}")
```

---

## 📊 Evaluation Checklist

- ✅ **Accuracy**: >80% for production
- ✅ **No Overfitting**: Train and test scores similar
- ✅ **Fast Inference**: <1 second response time
- ✅ **Reproducible**: Same results every time

---

## 🚀 [Next: Create User Interface →](./03-create-ui.md)
