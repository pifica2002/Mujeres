---
layout: docs
title: Close icon
description: Use a generic close icon for dismissing content like modals and alerts.
group: utilities
toc: true
---

**Be sure to includes text for screen readers**, as we've done with `aria-label`.

{% capture example %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endcapture %}
{% includes example.html content=example %}
