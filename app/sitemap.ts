import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://popularivf.com';

  const staticRoutes = [
    '',
    '/blog',
    '/book-appointment',
    '/careers',
    '/contact',
    '/doctors',
    '/facility-lab',
    '/gallery-tour',
    '/our-story',
    '/our-team',
    '/second-opinion',
    '/services',
    '/success-rate',
    '/success-stories',
    '/treatments',
    '/trying-for-a-baby',
    '/why-popular-ivf',
    '/why-us',
  ];

  const serviceRoutes = [
    '/services/diagnostics',
    '/services/donor-services',
    '/services/fertility-preservation',
    '/services/fertility-treatments',
    '/services/gynaecological-procedures',
    '/services/male-infertility',
  ];

  const treatmentRoutes = [
    '/treatments/advanced-laparoscopy',
    '/treatments/advanced-semen-analysis',
    '/treatments/basic-advanced-hysteroscopy',
    '/treatments/blastocyst-culture',
    '/treatments/cancer-fertility-preservation',
    '/treatments/donor-egg',
    '/treatments/donor-sperm',
    '/treatments/egg-freezing',
    '/treatments/electroejaculation',
    '/treatments/embryo-freezing',
    '/treatments/embryo-reduction',
    '/treatments/fet',
    '/treatments/genetic-panel',
    '/treatments/hormone-assay-ovarian-reserve',
    '/treatments/icsi',
    '/treatments/infertility-assessment-panel',
    '/treatments/iui',
    '/treatments/ivf',
    '/treatments/lah',
    '/treatments/micro-tese',
    '/treatments/ovarian-cortex-freezing',
    '/treatments/ovulation-induction',
    '/treatments/pesa',
    '/treatments/pgd-diagnosis',
    '/treatments/pgs-screening',
    '/treatments/sperm-freezing',
    '/treatments/tesa',
    '/treatments/testicular-tissue-biopsy',
    '/treatments/testicular-tissue-freezing',
    '/treatments/tubal-patency-tests',
    '/treatments/ultrasound-3d-doppler',
    '/treatments/varicocele-repair'
  ];

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...treatmentRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
