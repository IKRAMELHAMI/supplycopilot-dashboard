export default function AlertBanner({ data }) {
  const alerts = data.filter(item => item.alerte);
  if (alerts.length === 0) return null;

  return (
    <div className="bg-red-500 text-white p-3 mt-4 rounded shadow">
      <strong>⚠️ {alerts.length} alerte(s) détectée(s)</strong>
      <ul className="list-disc ml-5 mt-1">
        {alerts.map((a, i) => (
          <li key={i}>{a.produit} : {a.alerte}</li>
        ))}
      </ul>
    </div>
  );
}
