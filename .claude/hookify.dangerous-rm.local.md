---
name: block-dangerous-rm
enabled: true
event: bash
pattern: rm\s+(-[rfRF]+|.*-[rfRF].*)\s+
action: block
---

🛑 **Dangerous rm command detected**

This command could permanently delete files or directories.

**Blocked by hookify rule**: You configured this rule to prevent accidental data loss from rm -rf or similar commands.

**To proceed:**
1. Verify the path is absolutely correct
2. Consider using a safer alternative (move to trash, backup first)
3. If you're certain, you can temporarily disable this rule with `/hookify:configure`

**Pattern matched**: `rm` with flags like `-rf`, `-r`, or `-f`
