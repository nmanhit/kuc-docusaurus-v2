---
id: mobile-notification
title: MobileNotification
sidebar_label: MobileNotification
original_id: mobile-notification
---

## Overview

The MobileNotification component allows the user to display pop-up notifications.

import { MobileNotificationComponent } from "@site/static/js/samples/mobile/notification.js"

<MobileNotificationComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| text | string | ""  | Text to be displayed | |

### Constructor

MobileNotification(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

### Method

Here is a list of available methods:

#### open()
Show the MobileNotification

##### Parameter
none

##### Return
none

#### close()
Hide the MobileNotification

##### Parameter
none

##### Return
none

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const mobileNotification = new Kuc.MobileNotification({
  text:  'Error occurred!',
  className: 'options-class'
});
mobileNotification.open();
mobileNotification.close();
```
