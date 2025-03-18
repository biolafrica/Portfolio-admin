export default function LoginLayout({ children }) {
  return (
    
    <div className="login-layout">
      <div className="login-header">
        <img src="/icons/logo.svg" alt="abiodun logo" />
      </div>

      <main>
        {children}
      </main>

    </div>
    
  );
}