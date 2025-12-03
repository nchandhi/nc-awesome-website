# Step 6: Test & Validate

**Duration:** 45 minutes | **Level:** 🟡 Intermediate

---

## 🎯 Objective

Ensure your AI solution works correctly, safely, and meets requirements.

---

## 🧪 Testing Checklist

### Functional Testing
- ✅ **Happy Path**: Normal inputs work correctly
- ✅ **Edge Cases**: Empty inputs, special characters
- ✅ **Error Handling**: Invalid inputs fail gracefully
- ✅ **Performance**: Response time <2 seconds

### AI-Specific Testing
- ✅ **Accuracy**: Meets target metrics (>80%)
- ✅ **Bias**: Fair across demographics
- ✅ **Adversarial**: Handles unusual inputs
- ✅ **Explainability**: Can explain predictions

### User Acceptance Testing (UAT)
- ✅ **Usability**: 5 users test the UI
- ✅ **Feedback**: Collect satisfaction scores
- ✅ **Bugs**: Document issues found

---

## 🔍 Test Scenarios

| Test | Input | Expected Output |
|------|-------|-----------------|
| Normal | "Great product!" | POSITIVE (>90%) |
| Negative | "Terrible service" | NEGATIVE (>90%) |
| Neutral | "It's okay" | NEUTRAL (>50%) |
| Empty | "" | Error message |
| Long | 1000+ words | Handled or trimmed |

---

## 🛠️ Testing Tools

```python
import pytest

def test_sentiment_positive():
    result = classifier("I love this!")
    assert result['label'] == 'POSITIVE'
    assert result['score'] > 0.8

def test_empty_input():
    with pytest.raises(ValueError):
        classifier("")
```

**Run**: `pytest test_app.py`

---

## 📊 Validation Metrics

- **Precision**: 85%+ (avoid false positives)
- **Recall**: 80%+ (catch all relevant cases)
- **F1 Score**: 82%+ (balanced performance)
- **Latency**: <1 second (user experience)

---

## 🚀 [Proceed to Phase 3: Deployment →](../advanced/index.md)
