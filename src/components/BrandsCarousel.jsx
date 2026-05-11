const row1 = [
  { slug: 'tesla',        name: 'Tesla' },
  { slug: 'byd',          name: 'BYD' },
  { slug: 'renault',      name: 'Renault' },
  { slug: 'kia',          name: 'Kia' },
  { slug: 'hyundai',      name: 'Hyundai' },
  { slug: 'nissan',       name: 'Nissan' },
  { slug: 'volkswagen',   name: 'Volkswagen' },
  { slug: 'bmw',          name: 'BMW' },
  { slug: 'audi',         name: 'Audi' },
]

const row2 = [
  { slug: 'mercedesbenz', name: 'Mercedes-Benz' },
  { slug: 'volvo',        name: 'Volvo' },
  { slug: 'peugeot',      name: 'Peugeot' },
  { slug: 'porsche',      name: 'Porsche' },
  { slug: 'chevrolet',    name: 'Chevrolet' },
  { slug: 'ford',         name: 'Ford' },
  { slug: 'mg',           name: 'MG' },
  { slug: 'toyota',       name: 'Toyota' },
  { slug: 'jeep',         name: 'Jeep' },
]

function BrandPill({ slug, name }) {
  return (
    <div className="brand-pill">
      <img
        src={`/assets/brands/${slug}.svg`}
        alt={name}
        className="brand-pill-logo"
        draggable={false}
      />
      <span className="brand-pill-name">{name}</span>
    </div>
  )
}

function BrandsCarousel() {
  const r1 = [...row1, ...row1, ...row1]
  const r2 = [...row2, ...row2, ...row2]

  return (
    <section className="brands-strip">
      <div className="brands-strip-bg" aria-hidden="true" />

      <div className="brands-strip-header">
        <span className="brands-strip-eyebrow">Compatibilidad certificada</span>
        <h2 className="brands-strip-title">
          Cargamos <em>todos</em> los VE en Colombia
        </h2>
      </div>

      <div className="brands-marquee-area" aria-hidden="true">
        {/* Row 1 — scrolls left */}
        <div className="brands-track-wrapper">
          <div className="brands-track brands-track--left">
            {r1.map((b, i) => <BrandPill key={i} {...b} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="brands-track-wrapper">
          <div className="brands-track brands-track--right">
            {r2.map((b, i) => <BrandPill key={i} {...b} />)}
          </div>
        </div>
      </div>

      <p className="brands-strip-footnote">
        Compatible con estándar&nbsp;
        <strong>SAE J1772 · CCS · CHAdeMO · Type 2</strong>
      </p>
    </section>
  )
}

export default BrandsCarousel
