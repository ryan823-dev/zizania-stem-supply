import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 英文语言资源
const en = {
  translation: {
    // Header
    nav: {
      supply: 'Supply',
      cultivation: 'Cultivation',
      innovation: 'Innovation',
      resources: 'Resources',
      order: 'Order',
      contact: 'Contact',
      about: 'About'
    },
    // Hero
    hero: {
      subtitle: 'Production & Supply System',
      title: 'ZizaniaStem',
      description: 'Origin-based production and supply of edible Zizania latifolia stem.',
      keywords: 'Cultivation · Supply · Processing',
      cta1: 'Request Specs',
      cta2: 'Contact'
    },
    // Supply Page
    supply: {
      title: 'Global supply of edible Zizania latifolia stem',
      description: 'Supply organized at origin and aligned with distribution needs. Water bamboo and wild rice stem available in multiple forms for international markets.',
      productForms: 'Product Forms',
      fresh: 'Fresh',
      freshDesc: 'Seasonal supply of freshly harvested stems. Cold chain maintained from field to distribution.',
      frozen: 'Frozen',
      frozenDesc: 'Year-round availability. IQF processing preserves texture and nutritional profile.',
      processed: 'Processed',
      processedDesc: 'Value-added preparations including vacuum-packed and pre-cut formats.',
      season: 'Season',
      storage: 'Storage',
      handling: 'Handling',
      handlingDesc: 'Standardized handling from harvest to distribution point.',
      handlingChecklist: 'Handling Checklist',
      capability: 'Capability',
      specifications: 'Specifications',
      attribute: 'Attribute',
      options: 'Options',
      form: 'Form',
      grade: 'Grade',
      size: 'Size',
      cutType: 'Cut Type',
      packing: 'Packing',
      shelfLife: 'Shelf Life',
      minOrder: 'Minimum Order',
      leadTime: 'Lead Time',
      requestSpecs: 'Request Full Specification Sheet',
      logistics: 'Logistics',
      logisticsDesc1: 'Cold chain management tailored to product form. Fresh product requires refrigerated transport at 0–4°C. Frozen water bamboo shipped at -18°C in reefer containers.',
      logisticsDesc2: 'Standard export documentation supported including phytosanitary certificates, certificates of origin, and product specifications.',
      documentation: 'Documentation Support',
      faq: 'Frequently Asked',
      pricing: 'Pricing Range',
      productForm: 'Product Form',
      priceRange: 'Price Range',
      unit: 'Unit',
      priceNote: '* Prices are subject to seasonal variations and order volume. Contact us for detailed pricing based on your specific requirements.',
      orderingProcess: 'Ordering Process',
      cta: 'Ready to discuss supply requirements?',
      ctaButton: 'Contact for Supply Inquiry'
    },
    // Order Page
    order: {
      title: 'Order Now',
      description: 'Place your international order for premium water bamboo products',
      customerInfo: 'Customer Information',
      name: 'Name',
      company: 'Company',
      country: 'Country',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      productDetails: 'Product Details',
      productForm: 'Product Form',
      productGrade: 'Product Grade',
      productSize: 'Product Size',
      cutType: 'Cut Type',
      quantity: 'Quantity (kg)',
      shippingPayment: 'Shipping & Payment',
      shippingMethod: 'Shipping Method',
      paymentMethod: 'Payment Method',
      additionalInfo: 'Additional Information',
      specialInstructions: 'Special Instructions',
      submit: 'Submit Order',
      submitting: 'Processing Order...',
      terms: 'By submitting this form, you agree to our terms and conditions. We will contact you within 24 hours to confirm your order details and provide payment instructions.'
    },
    // Thank You Page
    thankYou: {
      title: 'Thank You!',
      message: 'Your order has been submitted successfully. We will contact you within 24 hours to confirm your order details and provide payment instructions.',
      returnHome: 'Return to Home',
      viewProducts: 'View Products',
      nextSteps: 'What Happens Next',
      step1: 'Order Confirmation',
      step1Desc: 'We will send you an email confirming receipt of your order within 1 hour.',
      step2: 'Details Review',
      step2Desc: 'Our team will review your order details and contact you within 24 hours to confirm everything is correct.',
      step3: 'Payment Instructions',
      step3Desc: 'We will provide you with detailed payment instructions based on your selected payment method.',
      step4: 'Order Processing',
      step4Desc: 'Once payment is received, we will process your order and arrange for shipping according to your selected method.',
      step5: 'Delivery',
      step5Desc: 'We will provide you with tracking information once your order has been shipped.',
      needHelp: 'Need Assistance?',
      helpMessage: 'If you have any questions about your order, please don\'t hesitate to contact us.',
      contactSupport: 'Contact Support'
    },
    // Resources Page
    resources: {
      title: 'Resources',
      description: 'Structured knowledge covering product, supply, cultivation, and applications. Informational content supporting informed decisions.',
      productKnowledge: 'Product Knowledge',
      productKnowledgeDesc: 'Understanding Zizania latifolia stem characteristics, varieties, and quality attributes.',
      supplyHandling: 'Supply & Handling',
      supplyHandlingDesc: 'Practical information for distribution, cold chain, and import considerations.',
      cultivationInsights: 'Cultivation Insights',
      cultivationInsightsDesc: 'Technical knowledge for water bamboo growing and production planning.',
      marketApplications: 'Market & Applications',
      marketApplicationsDesc: 'Culinary uses, market trends, and application development.',
      back: 'Back to Resources',
      articleNotFound: 'Article Not Found',
      articleNotFoundMessage: 'The requested article could not be found.'
    },
    // Contact Page
    contact: {
      title: 'Contact',
      description: 'Inquiry for supply, cultivation cooperation, or innovation partnership.',
      directContact: 'Direct Contact',
      email: 'Email',
      whatsapp: 'WhatsApp',
      responseTime: 'Response Time',
      responseTimeDesc: 'Inquiries typically receive response within 2 business days.',
      inquiryForm: 'Inquiry Form',
      submitInquiry: 'Submit Inquiry',
      submitting: 'Submitting...',
      inquiryTypes: {
        supply: 'Supply Inquiry',
        samples: 'Sample Request',
        cultivation: 'Cultivation Cooperation',
        innovation: 'Innovation Partnership',
        other: 'Other'
      }
    },
    // Footer
    footer: {
      about: 'About',
      aboutDesc: 'Origin-based production and supply of edible Zizania latifolia stem.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      social: 'Social',
      copyright: '© 2026 ZizaniaStem. All rights reserved.'
    },
    // Common
    required: '*',
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success!',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    cancel: 'Cancel'
  }
};

// 中文语言资源
const zh = {
  translation: {
    // Header
    nav: {
      supply: '供应',
      cultivation: '种植',
      innovation: '创新',
      resources: '资源',
      order: '订购',
      contact: '联系',
      about: '关于'
    },
    // Hero
    hero: {
      subtitle: '生产与供应系统',
      title: '茭白供应',
      description: '基于原产地的食用茭白茎生产和供应。',
      keywords: '种植 · 供应 · 加工',
      cta1: '索取规格',
      cta2: '联系我们'
    },
    // Supply Page
    supply: {
      title: '全球供应食用茭白茎',
      description: '供应在原产地组织，与分销需求保持一致。为国际市场提供多种形式的茭白和野生稻茎。',
      productForms: '产品形式',
      fresh: '新鲜',
      freshDesc: '季节性供应新鲜收获的茎。从田间到分销保持冷链。',
      frozen: '冷冻',
      frozenDesc: '全年供应。IQF加工保留质地和营养成分。',
      processed: '加工',
      processedDesc: '增值加工产品，包括真空包装和预切格式。',
      season: '季节',
      storage: '储存',
      handling: '处理',
      handlingDesc: '从收获到分销点的标准化处理。',
      handlingChecklist: '处理清单',
      capability: '能力',
      specifications: '规格',
      attribute: '属性',
      options: '选项',
      form: '形式',
      grade: '等级',
      size: '尺寸',
      cutType: '切割类型',
      packing: '包装',
      shelfLife: '保质期',
      minOrder: '最小订单',
      leadTime: '交货期',
      requestSpecs: '索取完整规格表',
      logistics: '物流',
      logisticsDesc1: '根据产品形式定制的冷链管理。新鲜产品需要在0-4°C的冷藏运输。冷冻茭白在冷藏集装箱中以-18°C运输。',
      logisticsDesc2: '支持标准出口文件，包括植物检疫证书、原产地证书和产品规格。',
      documentation: '文件支持',
      faq: '常见问题',
      pricing: '价格范围',
      productForm: '产品形式',
      priceRange: '价格范围',
      unit: '单位',
      priceNote: '* 价格会随季节变化和订单量而变化。请联系我们获取基于您具体需求的详细定价。',
      orderingProcess: '订购流程',
      cta: '准备好讨论供应需求了吗？',
      ctaButton: '联系供应咨询'
    },
    // Order Page
    order: {
      title: '立即订购',
      description: '为优质茭白产品下国际订单',
      customerInfo: '客户信息',
      name: '姓名',
      company: '公司',
      country: '国家',
      email: '邮箱',
      phone: '电话',
      address: '地址',
      productDetails: '产品详情',
      productForm: '产品形式',
      productGrade: '产品等级',
      productSize: '产品尺寸',
      cutType: '切割类型',
      quantity: '数量 (公斤)',
      shippingPayment: '运输和支付',
      shippingMethod: '运输方式',
      paymentMethod: '支付方式',
      additionalInfo: '附加信息',
      specialInstructions: '特殊说明',
      submit: '提交订单',
      submitting: '处理订单中...',
      terms: '提交此表单即表示您同意我们的条款和条件。我们将在24小时内联系您确认订单详情并提供支付说明。'
    },
    // Thank You Page
    thankYou: {
      title: '谢谢！',
      message: '您的订单已成功提交。我们将在24小时内联系您确认订单详情并提供支付说明。',
      returnHome: '返回首页',
      viewProducts: '查看产品',
      nextSteps: '接下来会发生什么',
      step1: '订单确认',
      step1Desc: '我们将在1小时内发送电子邮件确认收到您的订单。',
      step2: '详情审核',
      step2Desc: '我们的团队将审核您的订单详情，并在24小时内联系您确认一切正确。',
      step3: '支付说明',
      step3Desc: '我们将根据您选择的支付方式为您提供详细的支付说明。',
      step4: '订单处理',
      step4Desc: '一旦收到付款，我们将处理您的订单并根据您选择的方式安排运输。',
      step5: '交付',
      step5Desc: '一旦您的订单发货，我们将为您提供跟踪信息。',
      needHelp: '需要帮助？',
      helpMessage: '如果您对订单有任何疑问，请随时联系我们。',
      contactSupport: '联系支持'
    },
    // Resources Page
    resources: {
      title: '资源',
      description: '涵盖产品、供应、种植和应用的结构化知识。支持明智决策的信息内容。',
      productKnowledge: '产品知识',
      productKnowledgeDesc: '了解茭白茎的特性、品种和质量属性。',
      supplyHandling: '供应与处理',
      supplyHandlingDesc: '关于分销、冷链和进口考虑的实用信息。',
      cultivationInsights: '种植见解',
      cultivationInsightsDesc: '茭白种植和生产规划的技术知识。',
      marketApplications: '市场与应用',
      marketApplicationsDesc: '烹饪用途、市场趋势和应用开发。',
      back: '返回资源',
      articleNotFound: '文章未找到',
      articleNotFoundMessage: '请求的文章未找到。'
    },
    // Contact Page
    contact: {
      title: '联系我们',
      description: '供应、种植合作或创新合作伙伴的咨询。',
      directContact: '直接联系',
      email: '邮箱',
      whatsapp: '微信',
      responseTime: '响应时间',
      responseTimeDesc: '咨询通常在2个工作日内收到回复。',
      inquiryForm: '咨询表单',
      submitInquiry: '提交咨询',
      submitting: '提交中...',
      inquiryTypes: {
        supply: '供应咨询',
        samples: '样品请求',
        cultivation: '种植合作',
        innovation: '创新合作',
        other: '其他'
      }
    },
    // Footer
    footer: {
      about: '关于我们',
      aboutDesc: '基于原产地的食用茭白茎生产和供应。',
      quickLinks: '快速链接',
      contact: '联系我们',
      social: '社交',
      copyright: '© 2026 茭白供应。保留所有权利。'
    },
    // Common
    required: '*',
    loading: '加载中...',
    error: '发生错误',
    success: '成功！',
    back: '返回',
    next: '下一步',
    submit: '提交',
    cancel: '取消'
  }
};

// 初始化i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      zh
    },
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // 不需要转义HTML
    }
  });

export default i18n;
