---
name: warn-tests-before-completion
enabled: true
event: stop
action: warn
---

⚠️ **Test reminder before completion**

Before marking this work as complete, have you:

- [ ] Run the test suite?
- [ ] Verified tests pass?
- [ ] Added tests for new functionality?
- [ ] Checked for edge cases?

**This is just a reminder** - you can proceed if testing isn't applicable to this task.

**To disable this reminder**, use `/hookify:configure` and disable the "warn-tests-before-completion" rule.
