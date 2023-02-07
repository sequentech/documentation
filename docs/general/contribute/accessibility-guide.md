---
sidebar_position: 6
title: Accessibility Guide
---

In this guide we explain the steps we follow to check our software follows standard
accessibility guidelines. These steps should be followed on new releases to ensure
that the software is [WCAG 2.1 Level AA] conformant.

# Checks

- **Keyboard operability**: Check that the interface is fully operable through
      the keyboard. Open the webpage in the browser and try to go through all the
      different flows just using the keyboard.
- **Browser plugin checks**: Use a browser plugin to make automatic accessibility 
      checks. For example use [WAVE] on Chrome. The interface should not generate any
      errors or contrast errors, and you need to minimize the number of warnings.
- **Screen Reader**: Use a screen reader to check the experience those users
      actually have. For example you can activate VoiceOver on Mac Os X by pressing
      `Command + F5`. Some simple checks:
    - The page language can be determined/changed.
    - The focus order makes sense.
    - All inputs are properly labeled.
    - If an input error is automatically detected, it's identified/labeled (for
      example with `role="alert"`).
    - All images/icons have an alternative description.
    - No content becomes visible/hidden on hover/focus.
    - Time limits are properly managed. For example showing an alert modal a minute
      before closing the user session. 
- **Multiple browsers**: Check functionality on multiple browsers and operating
      systems: Chrome/Firefox/Safari and Windows/Mac/Linux.
- **Self Assessment**: The [W3C WCAG-EM Report Tool] is used to create a structured
  report of accessibility evaluation findings. It doesn't perform automated checks.
  Instead, it lists all sections of the WCAG 2.1 AA standard, and an evaluator (you)
  should evaluate all those sections. The tool provides links to instructions and
  examples on how to (manually) perform this evaluation.

[WCAG 2.1 Level AA]: https://www.w3.org/WAI/WCAG2AA-Conformance
[WAVE]: https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-GB
[W3C WCAG-EM Report Tool]: https://www.w3.org/WAI/eval/report-tool/#/