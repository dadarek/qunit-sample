Sample on how to setup QUnit
==

Do's
--
* Always check console for errors
* Run in multiple browsers
  * At least when you check-in
* Always fix tests that other people write (and you break)
* Include test-data directly in your test (don't make people hunt for it)
* *EVERYBODY* should run these, not just a privileged few
* Be paranoid, take small steps

Dont's
--
* Don't test the DOM
  * (Well, maybe. Get comfortable with basics first.)
  * Separate your DOM stuff from your core logic
* **Don't comment out broken tests**
* Don't write flakey tests
* Don't trust the computer
