---
name: warn-console-log
enabled: true
event: file
pattern: console\.log\(
action: warn
---

⚠️ **console.log statement detected**

You're about to add `console.log()` to your code.

**Reminder**: console.log statements are typically for debugging and may not be appropriate for production code.

**Consider:**
- Is this for debugging or permanent logging?
- Should you use a proper logging library instead?
- Will you remember to remove this later?

**This is just a warning** - the operation will proceed. You can disable this rule with `/hookify:configure` if it becomes annoying.
