---
name: warn-sensitive-files
enabled: true
event: file
conditions:
  - field: file_path
    operator: regex_match
    pattern: (\.(env|secret|key|pem|crt|password)$|credentials|config/secrets|\.git/config)
---

⚠️ **Sensitive file modification detected**

You're about to edit a file that may contain sensitive information:
- Environment variables (.env)
- API keys or secrets
- Certificates or private keys
- Credential files
- Git configuration

**Important reminders:**
- Don't commit secrets to version control
- Verify changes won't expose sensitive data
- Consider using environment-specific config instead of hardcoding
- Check if this file is in .gitignore

**This is just a warning** - the operation will proceed if you're sure this is safe.
