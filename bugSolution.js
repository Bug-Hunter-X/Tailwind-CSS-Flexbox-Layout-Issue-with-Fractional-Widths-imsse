```javascript
// Solution: Add the 'flex-grow' class to the divs for equal distribution.
function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex">
        <div className="w-1/2 bg-blue-500 p-2 flex-grow">
          First half
        </div>
        <div className="w-1/2 bg-red-500 p-2 flex-grow">
          Second half
        </div>
      </div>
    </div>
  );
}
```