export default function StockDashboard({ data }) {
  return (
    <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">📦 État des stocks</h2>
      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Produit</th>
            <th>Stock</th>
            <th>Seuil</th>
            <th>Commande Client</th>
            <th>Capacité</th>
            <th>Retard</th>
            <th>Alerte</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className={item.alerte ? "bg-red-100" : ""}>
              <td className="p-2 font-medium">{item.produit}</td>
              <td>{item.stock}</td>
              <td>{item.seuil}</td>
              <td>{item.commandeClient}</td>
              <td>{item.capacite}%</td>
              <td>{item.retardFournisseur ? "Oui" : "Non"}</td>
              <td>{item.alerte || "RAS"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
