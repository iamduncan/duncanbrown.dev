import Alert from './alert';
import Container from './container';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Meta />
      <div>
        <Alert preview={preview} />
        <Container>
          <Header />
          <main className='container mx-auto max-w-screen-xl'>{children}</main>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
