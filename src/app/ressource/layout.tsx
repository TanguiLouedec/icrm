import SubMenu from "../components/ressource/sub_menu/sub_menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SubMenu />
      {children}
    </div>
  )
}
