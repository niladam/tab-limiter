# Tab Limiter

#### A Chrome Extension that limits the number of open, non-pinned tabs to a specified value

This extension was originally created by [necolas](https://github.com/necolas/chrome-tab-limit).

This is an improved version of it, modified to suit my needs and offer some indication as to the tabs opened.

The indicators look like this:

<div style="background:#13B618">if the number of tabs is within a margin of 25% to 50%</div>
<div style="background:#E77714">if the number of tabs is within a margin of 50% to 75%</div>
<div style="background:#13B618">if the number of tabs is within a margin of 75% to 100%</div>

## Installation

### Option 1
1. Download the [dist/tab-limiter.crx](dist/tab-limiter.crx)
2. Install.

### Option 2
1. Download or clone this repository
2. Go to `chrome://extensions`
3. Enable developer mode
4. Load the unpacked extension

## Use

Specify the tab limit number by going into options (or click on the tab icon).
By default the limit is set as 20.
