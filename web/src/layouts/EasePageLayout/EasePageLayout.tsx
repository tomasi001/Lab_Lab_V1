type EasePageLayoutProps = {
  children?: React.ReactNode
}

const EasePageLayout = ({ children }: EasePageLayoutProps) => {
  return (
    <>
      <h1>Ease</h1>

      {children}
    </>
  )
}
export default EasePageLayout
