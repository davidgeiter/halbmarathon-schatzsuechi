import dynamic from "next/dynamic"

const QrCodeReader = dynamic(() => import("../src/components/QrCodeReader"), {
  ssr: false,
})

export default () => (
  <div>
    <h1>Hello!</h1>
    <div>
      <QrCodeReader />
    </div>
  </div>
)
