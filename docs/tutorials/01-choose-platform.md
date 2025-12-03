# Step 3: Choose Your AI Platform

**Duration:** 40 minutes | **Level:** 🟡 Intermediate

---

## 🎯 Objective

Select the right cloud platform and AI tools for your solution.

---

## ☁️ Platform Comparison

| Platform | Best For | Pricing | Learning Curve |
|----------|----------|---------|----------------|
| **Azure AI** | Enterprise, .NET shops | Pay-as-you-go | Medium |
| **AWS SageMaker** | Scalability, flexibility | Pay-as-you-go | High |
| **Google Vertex AI** | Python, data science | Pay-as-you-go | Medium |
| **Hugging Face** | NLP, pre-trained models | Free tier + paid | Low |
| **OpenAI API** | GPT models, quick start | Usage-based | Very Low |

---

## 🛠️ Setup Steps

### 1. Create Account
- Sign up for free tier (Azure $200 credit, AWS 12-month free, GCP $300)
- Verify email and payment method

### 2. Install Tools
```bash
# Python & pip
python --version

# Install AI SDKs
pip install azure-ai-ml          # Azure
pip install boto3 sagemaker      # AWS  
pip install google-cloud-aiplatform  # GCP
```

### 3. Configure Authentication
```bash
# Azure
az login

# AWS
aws configure

# GCP
gcloud auth login
```

---

## 💡 Decision Criteria

- **Budget**: Start with free tiers
- **Existing Stack**: Match your current cloud
- **Team Skills**: Python → GCP; .NET → Azure; Java → AWS
- **Use Case**: NLP → Hugging Face; Custom ML → AWS/Azure

---

## 🚀 [Next: Build Your Model →](./02-build-model.md)
