---
id: services-webparsy
title: Web scraping
---

Tideflow integrates with [webParsy](https://github.com/joseconstela/webparsy). An easy to use web scraper written in NodeJS that uses YAML definitions.

When adding your web scraper step to your workflows, you must define the web scraping steps via the UI. 

A quick example that scrapes Madrid’s temperature would be:

```yaml
jobs:
  main:
    steps:
      - goto: https://weather.com/es-ES/tiempo/hoy/l/SPXX0050:1:SP
      - text:
          selector: .today_nowcard-temp span
          type: number
          as: madrid_temperature
```

Tideflow will send the result of the web scraping process to your workflow’s next step.

Please visit WebParsy documentation to know more about its possibilities and its examples.

- [documentation](https://github.com/joseconstela/webparsy)
- [examples](https://github.com/joseconstela/webparsy/tree/master/example)
