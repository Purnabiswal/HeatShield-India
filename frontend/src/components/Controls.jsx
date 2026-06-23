function Controls({ solar, setSolar, coolRoof, setCoolRoof, trees, setTrees }) {
  return (
    <div className="space-y-3">
      <label className="block">
        <input
          type="checkbox"
          checked={solar}
          onChange={() => setSolar(!solar)}
        />
        Solar Panels
      </label>

      <label className="block">
        <input
          type="checkbox"
          checked={coolRoof}
          onChange={() => setCoolRoof(!coolRoof)}
        />
        Cool Roof
      </label>

      <label className="block">
        <input
          type="checkbox"
          checked={trees}
          onChange={() => setTrees(!trees)}
        />
        Trees
      </label>
    </div>
  );
}

export default Controls;
