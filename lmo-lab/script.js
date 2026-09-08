const TOTAL_BUDGET = 10;

const screens = {
  start: document.getElementById('startScreen'),
  game: document.getElementById('gameScreen'),
  result: document.getElementById('resultScreen')
};

const els = {
  startBtn: document.getElementById('startBtn'),
  resetTop: document.getElementById('resetTop'),
  backBtn: document.getElementById('backBtn'),
  restartBtn: document.getElementById('restartBtn'),
  shareBtn: document.getElementById('shareBtn'),
  stepCount: document.getElementById('stepCount'),
  stepName: document.getElementById('stepName'),
  progressFill: document.getElementById('progressFill'),
  budgetText: document.getElementById('budgetText'),
  stepTag: document.getElementById('stepTag'),
  questionTitle: document.getElementById('questionTitle'),
  questionDesc: document.getElementById('questionDesc'),
  options: document.getElementById('options'),
  budgetNote: document.getElementById('budgetNote'),
  projectIcon: document.getElementById('projectIcon'),
  projectField: document.getElementById('projectField'),
  projectTitle: document.getElementById('projectTitle'),
  projectSubtitle: document.getElementById('projectSubtitle'),
  specField: document.getElementById('specField'),
  specOrganism: document.getElementById('specOrganism'),
  specTrait: document.getElementById('specTrait'),
  specUse: document.getElementById('specUse'),
  resultBudget: document.getElementById('resultBudget'),
  projectExplanation: document.getElementById('projectExplanation'),
  biosafetyText: document.getElementById('biosafetyText'),
  biosafetyLevel: document.getElementById('biosafetyLevel'),
  shareMessage: document.getElementById('shareMessage')
};

const data = {
  fields: [
    {
      id: 'climate', emoji: '🌱', name: '기후변화 대응 농업', short: '지속가능한 농업',
      desc: '기후 스트레스와 안정적인 농업 생산 문제에 도전합니다.',
      organisms: ['tomato', 'corn', 'potato', 'arabidopsis']
    },
    {
      id: 'environment', emoji: '♻️', name: '환경오염 해결', short: '환경 바이오',
      desc: '환경조건을 감지하거나 환경 문제를 연구하는 프로젝트입니다.',
      organisms: ['ecoli', 'yeast', 'microalgae', 'arabidopsis']
    },
    {
      id: 'medicine', emoji: '💊', name: '바이오의약품', short: '바이오의약 연구',
      desc: '단백질 생산과 세포 수준의 바이오의약 연구에 도전합니다.',
      organisms: ['ecoli', 'yeast', 'plantcell', 'mammaliancell']
    },
    {
      id: 'industry', emoji: '🏭', name: '바이오산업', short: '산업 바이오',
      desc: '효소·바이오소재 등 지속가능한 산업 활용을 연구합니다.',
      organisms: ['ecoli', 'yeast', 'microalgae', 'plantcell']
    },
    {
      id: 'basic', emoji: '🔬', name: '기초연구', short: '기초 생명과학',
      desc: '유전자 발현과 세포·생물학적 현상을 탐구합니다.',
      organisms: ['ecoli', 'yeast', 'tomato', 'arabidopsis']
    }
  ],

  organisms: {
    ecoli: {
      emoji: '🦠', name: '대장균', cost: 1,
      desc: '연구·산업 분야에서 널리 활용되는 대표적 미생물 모델',
      traits: {
        environment: ['biosensor', 'reporter'], medicine: ['protein', 'reporter'],
        industry: ['enzyme', 'biomaterial'], basic: ['reporter', 'expression']
      }
    },
    yeast: {
      emoji: '🍺', name: '효모', cost: 2,
      desc: '단백질·효소 생산과 세포 연구에 활용되는 진핵 미생물',
      traits: {
        environment: ['biosensor', 'reporter'], medicine: ['protein', 'reporter'],
        industry: ['enzyme', 'biomaterial'], basic: ['reporter', 'expression']
      }
    },
    microalgae: {
      emoji: '🟢', name: '미세조류', cost: 3,
      desc: '환경·산업 바이오 분야에서 연구되는 광합성 미생물',
      traits: { environment: ['biosensor', 'reporter'], industry: ['biomaterial', 'reporter'] }
    },
    tomato: {
      emoji: '🍅', name: '토마토', cost: 4,
      desc: '농업 형질과 식물 생리 연구에 활용되는 대표 작물',
      traits: { climate: ['drought', 'disease', 'storage', 'reporter'], basic: ['reporter', 'expression'] }
    },
    corn: {
      emoji: '🌽', name: '옥수수', cost: 4,
      desc: '생산성과 환경 스트레스 연구에 활용되는 주요 작물',
      traits: { climate: ['drought', 'disease', 'quality'] }
    },
    potato: {
      emoji: '🥔', name: '감자', cost: 4,
      desc: '저장성·병해 관련 연구에 활용되는 주요 작물',
      traits: { climate: ['disease', 'storage', 'quality'] }
    },
    arabidopsis: {
      emoji: '🌿', name: '애기장대', cost: 3,
      desc: '식물 유전학과 기초 연구에서 널리 활용되는 모델식물',
      traits: { climate: ['drought', 'disease', 'reporter'], environment: ['biosensor', 'reporter'], basic: ['reporter', 'expression'] }
    },
    plantcell: {
      emoji: '🌱', name: '식물세포', cost: 3,
      desc: '식물 유래 물질 생산과 세포 수준 연구에 활용 가능한 시스템',
      traits: { medicine: ['protein', 'reporter'], industry: ['biomaterial', 'reporter'] }
    },
    mammaliancell: {
      emoji: '🧫', name: '동물세포', cost: 5,
      desc: '복잡한 단백질과 세포 기능 연구에 활용되는 세포 시스템',
      traits: { medicine: ['protein', 'reporter', 'expression'] }
    }
  },

  traits: {
    drought: {
      emoji: '💧', name: '건조 스트레스 대응', cost: 2,
      title: '건조 스트레스 대응',
      desc: '물 부족 환경에서 나타나는 식물의 반응을 연구합니다.',
      explain: '건조 스트레스에 대한 식물의 반응을 연구하면 기후변화 환경에서 작물이 어떻게 적응하는지 이해하는 데 활용할 수 있습니다.'
    },
    disease: {
      emoji: '🛡️', name: '병해 저항성', cost: 2,
      title: '병해 저항성',
      desc: '식물과 병원체의 상호작용 및 저항성 반응을 연구합니다.',
      explain: '병해 저항성 관련 형질 연구는 식물이 병원체에 대응하는 원리를 이해하고 안정적인 농업 생산을 위한 연구에 활용될 수 있습니다.'
    },
    storage: {
      emoji: '📦', name: '저장성 향상', cost: 2,
      title: '저장성 연구',
      desc: '수확 후 품질 유지와 저장 과정의 생리적 변화를 연구합니다.',
      explain: '작물의 성숙과 저장 과정에 관여하는 생물학적 특성을 연구하면 수확 후 품질 유지와 저장성 관련 연구에 활용할 수 있습니다.'
    },
    quality: {
      emoji: '🌟', name: '품질 특성 개선', cost: 2,
      title: '품질 특성 연구',
      desc: '작물 품질과 관련된 생물학적 특성을 탐색합니다.',
      explain: '작물의 품질을 결정하는 생물학적 특성을 연구하면 농업 생산성과 이용 가치를 높이기 위한 기초자료로 활용할 수 있습니다.'
    },
    biosensor: {
      emoji: '📡', name: '특정 물질 감지', cost: 2,
      title: '환경 감지',
      desc: '특정 환경조건이나 물질에 대한 생물학적 반응을 관찰합니다.',
      explain: '특정 환경조건에 반응하는 생물학적 신호를 관찰하는 연구는 환경 모니터링 원리를 이해하는 데 활용될 수 있습니다.'
    },
    reporter: {
      emoji: '✨', name: '형광 표지', cost: 1,
      title: '형광 표지',
      desc: '유전자 발현이나 세포·조직 변화를 관찰하는 연구용 표지입니다.',
      explain: '형광 단백질을 연구용 표지자로 활용하면 특정 유전자의 발현이나 세포·조직에서 나타나는 생물학적 현상을 관찰하는 연구에 활용할 수 있습니다.'
    },
    protein: {
      emoji: '🧪', name: '유용 단백질 생산', cost: 2,
      title: '유용 단백질 생산',
      desc: '특정 단백질을 생산하는 바이오의약 연구 목적입니다.',
      explain: '유용 단백질 생산을 목표로 하는 LMO 연구는 바이오의약 및 생명과학 분야에서 활용될 수 있습니다.'
    },
    enzyme: {
      emoji: '⚙️', name: '산업용 효소 생산', cost: 2,
      title: '산업용 효소 생산',
      desc: '산업 공정에 활용 가능한 효소·단백질을 연구합니다.',
      explain: '미생물을 활용한 효소 생산 연구는 바이오산업 공정에서 필요한 생물학적 소재를 연구하는 데 활용될 수 있습니다.'
    },
    biomaterial: {
      emoji: '🌿', name: '바이오소재 생산', cost: 2,
      title: '바이오소재 생산',
      desc: '생물 기반 소재와 지속가능한 생산기술을 연구합니다.',
      explain: '생물체를 활용한 바이오소재 연구는 지속가능한 산업 소재와 생산기술을 탐색하는 데 활용될 수 있습니다.'
    },
    expression: {
      emoji: '🔎', name: '유전자 발현 관찰', cost: 1,
      title: '유전자 발현 연구',
      desc: '생물학적 반응과 유전자 기능을 이해하기 위한 연구입니다.',
      explain: '특정 유전자의 발현 변화를 관찰하면 세포와 생물이 환경이나 자극에 어떻게 반응하는지 이해하는 기초연구에 활용할 수 있습니다.'
    }
  },

  uses: [
    {
      id: 'contained', emoji: '🔬', name: '밀폐 연구시설', cost: 1,
      desc: '연구시설 내부에서 제한적으로 이용하는 가상 시나리오',
      safety: '밀폐된 연구시설에서 이용하더라도 시설 기준과 취급·보관 등 관련 안전관리 사항을 확인하는 것이 중요합니다.',
      level: '시설·취급 안전관리 확인'
    },
    {
      id: 'industrial', emoji: '🏭', name: '산업시설', cost: 2,
      desc: '생산·공정 등 산업적 이용을 가정한 시나리오',
      safety: '산업적 이용은 연구 단계와 다른 이용 환경을 가질 수 있으므로 용도와 시설에 따른 관련 안전관리 절차를 확인해야 합니다.',
      level: '산업 이용 안전관리 확인'
    },
    {
      id: 'environmental', emoji: '🌎', name: '환경 이용', cost: 3,
      desc: '외부 환경에서의 이용 가능성을 가정한 교육용 시나리오',
      safety: '환경에서의 이용은 주변 생태계와의 상호작용 가능성을 함께 고려해야 하므로 관련 위해성 평가와 안전관리 요건을 충분히 확인해야 합니다.',
      level: '환경 이용 시 추가 검토 필요'
    }
  ]
};

const state = {
  step: 1,
  fieldId: null,
  organismId: null,
  traitId: null,
  useId: null,
  budget: TOTAL_BUDGET
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  els.resetTop.classList.toggle('hidden', name === 'start');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetState() {
  state.step = 1;
  state.fieldId = null;
  state.organismId = null;
  state.traitId = null;
  state.useId = null;
  recalcBudget();
  els.shareMessage.textContent = '';
}

function getField() {
  return data.fields.find(f => f.id === state.fieldId);
}

function getUse() {
  return data.uses.find(u => u.id === state.useId);
}

function recalcBudget() {
  let spent = 0;
  if (state.organismId) spent += data.organisms[state.organismId].cost;
  if (state.traitId) spent += data.traits[state.traitId].cost;
  if (state.useId) spent += getUse().cost;
  state.budget = TOTAL_BUDGET - spent;
  if (els.budgetText) els.budgetText.textContent = `${state.budget}억`;
}

function makeOptionCard({ emoji, title, desc, cost, disabled = false, onClick }) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `option-card${disabled ? ' disabled' : ''}`;
  btn.disabled = disabled;
  btn.innerHTML = `
    <span class="option-emoji">${emoji}</span>
    <span class="option-copy">
      <strong>${title}</strong>
      <span>${desc}</span>
      ${typeof cost === 'number' ? `<span class="option-cost">💰 ${cost}억</span>` : ''}
    </span>`;
  if (!disabled) btn.addEventListener('click', onClick);
  return btn;
}

function setBudgetNote(text, warn = false) {
  els.budgetNote.textContent = text;
  els.budgetNote.classList.toggle('warn', warn);
}

function renderStep() {
  showScreen('game');
  recalcBudget();
  els.options.innerHTML = '';
  els.stepCount.textContent = `STEP ${state.step} / 4`;
  els.progressFill.style.width = `${state.step * 25}%`;
  els.backBtn.classList.toggle('hidden', state.step === 1);

  if (state.step === 1) {
    els.stepName.textContent = '연구 분야';
    els.stepTag.textContent = 'STEP 1 · FIELD';
    els.questionTitle.textContent = '어떤 문제를 해결하고 싶나요?';
    els.questionDesc.textContent = '연구 분야를 선택하세요. 이후 선택지는 연구 목적에 맞게 달라집니다.';
    setBudgetNote('💡 연구 분야 선택에는 연구비가 차감되지 않습니다.');

    data.fields.forEach(field => {
      els.options.appendChild(makeOptionCard({
        emoji: field.emoji,
        title: field.name,
        desc: field.desc,
        onClick: () => {
          state.fieldId = field.id;
          state.organismId = null;
          state.traitId = null;
          state.useId = null;
          state.step = 2;
          renderStep();
        }
      }));
    });
  }

  if (state.step === 2) {
    const field = getField();
    els.stepName.textContent = '연구 생물';
    els.stepTag.textContent = 'STEP 2 · ORGANISM';
    els.questionTitle.textContent = '어떤 생물을 연구할까요?';
    els.questionDesc.textContent = `${field.name} 분야에 어울리는 후보만 보여드릴게요.`;
    setBudgetNote('💰 연구 생물에 따라 필요한 가상 연구비가 달라집니다.');

    field.organisms.forEach(id => {
      const org = data.organisms[id];
      const disabled = org.cost > state.budget;
      els.options.appendChild(makeOptionCard({
        emoji: org.emoji,
        title: org.name,
        desc: org.desc,
        cost: org.cost,
        disabled,
        onClick: () => {
          state.organismId = id;
          state.traitId = null;
          state.useId = null;
          state.step = 3;
          recalcBudget();
          renderStep();
        }
      }));
    });
  }

  if (state.step === 3) {
    const field = getField();
    const org = data.organisms[state.organismId];
    const traitIds = org.traits[state.fieldId] || [];

    els.stepName.textContent = '연구 특성';
    els.stepTag.textContent = 'STEP 3 · TRAIT';
    els.questionTitle.textContent = `${org.name}에 어떤 특성을 연구할까요?`;
    els.questionDesc.textContent = `${field.name} 목적과 ${org.name} 조합에 어울리는 특성만 제안합니다.`;
    setBudgetNote(`현재 남은 연구비는 ${state.budget}억 원입니다.`);

    traitIds.forEach(id => {
      const trait = data.traits[id];
      const disabled = trait.cost > state.budget;
      els.options.appendChild(makeOptionCard({
        emoji: trait.emoji,
        title: trait.name,
        desc: trait.desc,
        cost: trait.cost,
        disabled,
        onClick: () => {
          state.traitId = id;
          state.useId = null;
          state.step = 4;
          recalcBudget();
          renderStep();
        }
      }));
    });
  }

  if (state.step === 4) {
    const org = data.organisms[state.organismId];
    els.stepName.textContent = '이용 환경';
    els.stepTag.textContent = 'STEP 4 · USE';
    els.questionTitle.textContent = '어디에서 이용할 계획인가요?';
    els.questionDesc.textContent = '이용 환경은 바이오안전 관리 포인트를 생각해보는 단계입니다.';

    let availableCount = 0;
    data.uses.forEach(use => {
      const disabled = use.cost > state.budget;
      if (!disabled) availableCount += 1;
      els.options.appendChild(makeOptionCard({
        emoji: use.emoji,
        title: use.name,
        desc: use.desc,
        cost: use.cost,
        disabled,
        onClick: () => {
          state.useId = use.id;
          recalcBudget();
          renderResult();
        }
      }));
    });

    if (availableCount === 0) {
      setBudgetNote('⚠️ 남은 연구비로 선택 가능한 이용 환경이 없습니다. 이전 단계에서 다른 특성을 선택해보세요.', true);
    } else {
      setBudgetNote(`현재 남은 연구비는 ${state.budget}억 원입니다. 예산 안에서 이용 환경을 선택하세요.`);
    }
  }
}

function goBack() {
  if (state.step === 2) {
    state.fieldId = null;
    state.organismId = null;
    state.traitId = null;
    state.useId = null;
    state.step = 1;
  } else if (state.step === 3) {
    state.organismId = null;
    state.traitId = null;
    state.useId = null;
    state.step = 2;
  } else if (state.step === 4) {
    state.traitId = null;
    state.useId = null;
    state.step = 3;
  }
  recalcBudget();
  renderStep();
}

function buildProjectTitle(field, org, trait) {
  if (state.fieldId === 'environment' && state.traitId === 'biosensor') {
    return `환경오염 감지 ${org.name}`;
  }
  if (state.traitId === 'reporter') {
    return `형광 표지 ${org.name}`;
  }
  return `${trait.title} ${org.name}`;
}

function renderResult() {
  const field = getField();
  const org = data.organisms[state.organismId];
  const trait = data.traits[state.traitId];
  const use = getUse();
  const title = buildProjectTitle(field, org, trait);

  els.projectIcon.textContent = org.emoji;
  els.projectField.textContent = field.short;
  els.projectTitle.textContent = `「${title}」`;
  els.projectSubtitle.textContent = `${field.name} 분야에서 ${trait.name} 특성을 활용하는 가상 LMO 연구 프로젝트`;
  els.specField.textContent = field.name;
  els.specOrganism.textContent = org.name;
  els.specTrait.textContent = trait.name;
  els.specUse.textContent = use.name;
  els.resultBudget.textContent = `${state.budget}억 원`;
  els.projectExplanation.textContent = trait.explain;
  els.biosafetyText.textContent = `LMO는 개발 목적뿐 아니라 어떻게 이용하고 관리하는지도 중요합니다. ${use.safety}`;
  els.biosafetyLevel.textContent = use.level;

  showScreen('result');
}

async function shareResult() {
  const field = getField();
  const org = data.organisms[state.organismId];
  const trait = data.traits[state.traitId];
  const use = getUse();
  const title = buildProjectTitle(field, org, trait);

  const text = `🧬 LMO LAB\n「${title}」\n\n🎯 ${field.name}\n🧫 ${org.name}\n🧬 ${trait.name}\n🏢 ${use.name}\n💰 남은 연구비 ${state.budget}억 원\n\n#LMO #바이오안전`;

  if (navigator.share) {
    try {
      await navigator.share({ title: 'LMO LAB', text, url: window.location.href });
      els.shareMessage.textContent = '공유 메뉴를 열었어요.';
      return;
    } catch (err) {
      if (err.name === 'AbortError') return;
    }
  }

  try {
    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    els.shareMessage.textContent = '결과 내용이 클립보드에 복사됐어요.';
  } catch {
    els.shareMessage.textContent = '공유 기능을 사용할 수 없어요. 결과 화면을 캡처해 공유해보세요.';
  }
}

els.startBtn.addEventListener('click', () => {
  resetState();
  renderStep();
});

els.backBtn.addEventListener('click', goBack);

els.restartBtn.addEventListener('click', () => {
  resetState();
  renderStep();
});

els.resetTop.addEventListener('click', () => {
  resetState();
  showScreen('start');
});

els.shareBtn.addEventListener('click', shareResult);
