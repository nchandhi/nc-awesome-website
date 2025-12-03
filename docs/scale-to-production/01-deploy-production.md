# Step 7: Deploy to Production

**Duration:** 55 minutes | **Level:** 🔴 Advanced

---

## 🎯 Objective

Move your AI solution from development to production with CI/CD pipeline.

---

## 🚀 Deployment Options

| Option | Best For | Cost | Complexity |
|--------|----------|------|------------|
| **Azure App Service** | Web apps | $$ | Low |
| **AWS Lambda** | Serverless | $ | Medium |
| **Docker + K8s** | Scale, control | $$$ | High |
| **Streamlit Cloud** | Demos | Free-$ | Very Low |

---

## 📦 Containerize Your App

### Dockerfile
```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Build & Run
```bash
docker build -t my-ai-app .
docker run -p 8000:8000 my-ai-app
```

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build and push to Azure
        run: |
          az webapp up --name my-ai-app --resource-group my-rg
```

---

## ✅ Pre-Deployment Checklist

- ✅ **Environment Variables**: API keys secured
- ✅ **Error Logging**: Sentry, Azure Monitor
- ✅ **Load Testing**: Can handle 100+ concurrent users
- ✅ **Rollback Plan**: Previous version ready
- ✅ **Documentation**: Deployment runbook ready

---

## 🚀 [Next: Monitor & Optimize →](./02-monitor-optimize.md)
