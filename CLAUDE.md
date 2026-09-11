<!-- AI-REVIEW-CONTROL-CENTER:BEGIN -->
## Formal review (AI Review Control Center)

When a formal review is required, resolve the current Review Policy for this project by running:

    review-control policy resolve --project arcc-uat-alpha-478b58ae48

- If the external AI Review Control Center is enabled (policy STANDARD_REVIEW or CODEX_FORMAL_ONLY),
  push the branch, then submit the normalized review request through REVIEWER_ROUTER and do NOT
  independently choose a reviewer:

    review-control request submit --project arcc-uat-alpha-478b58ae48 --repo <owner/repo> --pr <n> --head <sha> --reason PR_UPDATED
    review-control request wait <requestId>

  Act on the returned `action` exactly as returned: REVIEW_GATE_PASSED (the gate passed; it is not
  accepted progress), CORRECTION_REQUIRED (apply the fix, push, submit again with the new head),
  REVIEW_BLOCKED, PARKED_RESUMABLE (stop and tell the user what choices the Control Center offers).
- If the current policy is NATIVE_REVIEW, use this project's normal/native review behaviour.
- If the policy is REVIEW_DISABLED, do not start automated review.

The routing configuration (which reviewer, which model, which channel) lives outside this file and is
changed only in the Control Center UI. Never edit this block to change the reviewer.
<!-- AI-REVIEW-CONTROL-CENTER:END -->
