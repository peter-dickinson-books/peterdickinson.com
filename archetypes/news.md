---
type: news
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
parent: news
image: "/images/"
---

This text will be shown on the news page.

<!--more-->

Anything below the line above will be hidden on the news page but will be
shown after a user clicks the news article link.
