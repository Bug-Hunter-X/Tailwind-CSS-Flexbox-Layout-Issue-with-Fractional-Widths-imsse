```javascript
// This component uses Tailwind CSS classes and has an error.
function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex">
        <div className="w-1/2 bg-blue-500 p-2">
          First half
        </div>
        <div className="w-1/2 bg-red-500 p-2">
          Second half
        </div>
      </div>
    </div>
  );
}
```