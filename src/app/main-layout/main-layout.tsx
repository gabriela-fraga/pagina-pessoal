import MenuLateral from "../components/menu-lateral/menu-lateral";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-100" >
      <div className="w-full md:w-1/4 bg-white text-white flex flex-col">
        <MenuLateral />
      </div>
      <div className="w-full md:w-3/4 flex flex-col" id="root">
        {children}
      </div>
    </div>
  );
}
