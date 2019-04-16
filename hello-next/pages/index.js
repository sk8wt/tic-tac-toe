// // This is the Link API
// import Link from 'next/link'

// const Index = () => (
//   <div>
//    <Link href="/about">
//   		<button>Go to About Page</button>
// 	</Link>
//     <p>Hello Next.js</p>
//   </div>
// )

// export default Index

// pages/index.js
import Link from 'next/link';

function Home() {
  return (
    <div>
      Click{' '}
      <Link href="/about">
        <a>here</a>
      </Link>{' '}
      to read more
    </div>
  );
}

export default Home;