# Tailwind CSS Flexbox Layout Issue
This repository demonstrates a bug encountered when using Tailwind CSS's flexbox utilities with fractional widths. The expected behavior is for the two divs to equally share the available space. However, the actual behavior shows that they do not distribute the space correctly, leading to unexpected layout issues.

## Bug Description
The provided JavaScript code shows a simple component with two divs using `w-1/2` class to occupy half the width each.  However, the divs do not always divide the space evenly, resulting in unexpected behavior.

## Solution
The solution involves ensuring proper parent container settings for the flexbox to work as expected. This usually involves explicitly setting the parent width or using `flex-grow` property.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the application.
4. Observe the unexpected layout behavior of the two divs.