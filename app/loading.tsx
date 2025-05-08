export default function Loading() {
  return (
    <div 
    style={{backgroundImage: `url("/loadingbackground.jpg")`}}
    className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
    </div>
  );
}
