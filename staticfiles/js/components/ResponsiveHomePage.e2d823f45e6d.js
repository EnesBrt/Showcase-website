import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ResponsiveHomePage = () => {
  const isExtraSmallDevice = useMediaQuery({ maxWidth: 600 });
  const isSmallDevice = useMediaQuery({ minWidth: 601, maxWidth: 960 });

  return (
    <div>
      {isExtraSmallDevice && <ExtraSmallDeviceContent />}
      {isSmallDevice && <SmallDeviceContent />}
      {!isExtraSmallDevice && !isSmallDevice && <DefaultContent />}
    </div>
  );
};

// Ces composants seront définis dans les prochaines étapes
const ExtraSmallDeviceContent = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Trois étoiles nettoyage</h1>
    
    <div style={{ marginBottom: '30px' }}>
      <img src="/static/bed.jpeg" alt="À propos de nous" style={{ width: '100%', borderRadius: '10px' }} />
      <div style={{ marginTop: '20px' }}>
        {/* Remplacez ce texte par le contenu de page.our_company_text */}
        <p>Notre entreprise se dédie à fournir des services de nettoyage de haute qualité...</p>
      </div>
    </div>

    <div style={{ marginBottom: '30px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Nos Valeurs</h2>
      {['Altruisme', 'Qualité', 'Respect'].map(value => (
        <div key={value} style={{ marginBottom: '15px' }}>
          <img src={`/static/${value.toLowerCase()}_icon.png`} alt={value} style={{ width: '50px', height: '50px' }} />
          <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{value}</h3>
          <p>Description de la valeur {value}...</p>
        </div>
      ))}
    </div>

    <div style={{ marginBottom: '30px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Nos Services</h2>
      {/* Remplacez ce texte par le contenu de page.services_section_text */}
      <p style={{ color: 'goldenrod', marginBottom: '15px' }}>Découvrez nos services de qualité...</p>
      {['Ménage à domicile', 'Repassage à domicile', 'Ménage pour les ainés', 'Grand nettoyage', 'Résidence secondaire'].map(service => (
        <div key={service} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h3 style={{ fontSize: '16px' }}>{service}</h3>
        </div>
      ))}
    </div>

    <div>
      <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Contactez-nous</h2>
      {/* Remplacez ce texte par le contenu de page.contact_us_section_text */}
      <p>Pour un devis gratuit ou plus d'informations...</p>
      <button style={{
        marginTop: '15px',
        padding: '10px 20px',
        backgroundColor: 'goldenrod',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        fontSize: '16px'
      }}>
        Je demande un devis
      </button>
    </div>
  </div>
);

const SmallDeviceContent = () => (
  <div style={{ padding: '30px' }}>
    <h1 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '30px' }}>Trois étoiles nettoyage</h1>
    
    <div style={{ display: 'flex', marginBottom: '40px' }}>
      <img src="/static/bed.jpeg" alt="À propos de nous" style={{ width: '50%', borderRadius: '10px', marginRight: '20px' }} />
      <div style={{ width: '50%' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>À propos de nous</h2>
        {/* Remplacez ce texte par le contenu de page.our_company_text */}
        <p>Notre entreprise se dédie à fournir des services de nettoyage de haute qualité...</p>
      </div>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>Nos Valeurs</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {['Altruisme', 'Qualité', 'Respect'].map(value => (
          <div key={value} style={{ width: '30%', textAlign: 'center' }}>
            <img src={`/static/${value.toLowerCase()}_icon.png`} alt={value} style={{ width: '60px', height: '60px' }} />
            <h3 style={{ fontSize: '20px', margin: '10px 0' }}>{value}</h3>
            <p>Description de la valeur {value}...</p>
          </div>
        ))}
      </div>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>Nos Services</h2>
      {/* Remplacez ce texte par le contenu de page.services_section_text */}
      <p style={{ color: 'goldenrod', textAlign: 'center', marginBottom: '20px' }}>Découvrez nos services de qualité...</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {['Ménage à domicile', 'Repassage à domicile', 'Ménage pour les ainés', 'Grand nettoyage', 'Résidence secondaire'].map(service => (
          <div key={service} style={{ width: '48%', marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '18px' }}>{service}</h3>
          </div>
        ))}
      </div>
    </div>

    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Contactez-nous</h2>
      {/* Remplacez ce texte par le contenu de page.contact_us_section_text */}
      <p>Pour un devis gratuit ou plus d'informations...</p>
      <button style={{
        marginTop: '20px',
        padding: '12px 24px',
        backgroundColor: 'goldenrod',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        fontSize: '18px'
      }}>
        Je demande un devis
      </button>
    </div>
  </div>
);

const DefaultContent = () => (
  <div>
    <div id="landing" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '48px', textAlign: 'center' }}>Trois étoiles nettoyage</h1>
    </div>

    <div id="about_us" style={{ position: 'relative', overflow: 'hidden', width: '100vw', marginLeft: 'calc(-50vw + 50%)', height: '600px', borderRadius: '20px' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', overflow: 'hidden', borderRadius: '20px' }}>
        <img src="/static/bed.jpeg" alt="À propos de nous" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', padding: '20px', maxWidth: '80%' }}>
          {/* Remplacez ce texte par le contenu de page.our_company_text */}
          <p>Notre entreprise se dédie à fournir des services de nettoyage de haute qualité...</p>
        </div>
      </div>
    </div>

    <div id="values" style={{ padding: '50px 0', margin: '100px' }}>
      <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '50px' }}>Nos Valeurs</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {['Altruisme', 'Qualité', 'Respect'].map(value => (
          <div key={value} style={{ textAlign: 'center', width: '30%' }}>
            <img src={`/static/${value.toLowerCase()}_icon.png`} alt={value} style={{ width: '142px', height: '142px' }} />
            <h3 style={{ fontSize: '24px', margin: '20px 0' }}>{value}</h3>
            <p>Description de la valeur {value}...</p>
          </div>
        ))}
      </div>
    </div>

    <div id="services" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
      <div style={{ margin: '0 100px' }}>
        <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '50px' }}>Nos Services</h2>
        {/* Remplacez ce texte par le contenu de page.services_section_text */}
        <p style={{ color: 'goldenrod', textAlign: 'center', marginBottom: '50px', fontSize: '20px' }}>Découvrez nos services de qualité...</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {['Ménage à domicile', 'Repassage à domicile', 'Ménage pour les ainés', 'Grand nettoyage', 'Résidence secondaire', 'Et bien plus encore !'].map(service => (
            <div key={service} style={{ width: '30%', marginBottom: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '20px' }}>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div id="contact_us" style={{ position: 'relative', width: '100%', height: '600px', marginTop: '50px' }}>
      <img src="/static/menage.jpeg" alt="Contact" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 40%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 100%)',
        pointerEvents: 'none' 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        right: '5%', 
        transform: 'translateY(-50%)', 
        width: '40%', 
        height: '70%', 
        backgroundColor: 'white', 
        borderRadius: '15px', 
        padding: '40px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}>
        <div>
          <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '30px' }}>Contactez-nous</h2>
          {/* Remplacez ce texte par le contenu de page.contact_us_section_text */}
          <p style={{ textAlign: 'center' }}>Pour un devis gratuit ou plus d'informations...</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{
            marginTop: '30px',
            width: '300px',
            padding: '15px 30px',
            backgroundColor: 'goldenrod',
            color: 'white',
            border: 'none',
            borderRadius: '999px',
            fontSize: '18px',
            cursor: 'pointer'
          }}>
            Je demande un devis
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ResponsiveHomePage;