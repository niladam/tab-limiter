# <img src="https://raw.githubusercontent.com/niladam/tab-limiter/master/icons/tab_32.png"> Tab Limiter

#### A Chrome Extension that limits the number of open, non-pinned tabs to a specified value

This extension was originally created by [necolas](https://github.com/necolas/chrome-tab-limit).

This is an improved version of it, modified to suit my needs and offer some indication as to the tabs opened.

The indicators look like this:

- ![#13B618](https://placehold.it/17/13B618/ffffff?text=+) `if the number of tabs is within a margin of 25% to 50%`
- ![#E77714](https://placehold.it/17/E77714/ffffff?text=+) `if the number of tabs is within a margin of 50% to 75%`
- ![#CD482C](https://placehold.it/17/CD482C/ffffff?text=+) `if the number of tabs is within a margin of 75% to 100%`

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
