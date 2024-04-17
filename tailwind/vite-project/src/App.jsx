function App() {
  return (
    <>
      <div className='grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-3 '> {/* Correct the class name from 'grid-col-3' to 'grid-cols-3' */}
        <div className='bg-red-500'>Box 1</div>
        <div className='bg-blue-500'>Box 2</div>
        <div className='bg-purple-500'>Box 3</div>
      </div>
    </>
  );
}

export default App;
