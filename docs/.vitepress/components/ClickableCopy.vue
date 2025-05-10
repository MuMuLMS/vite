<script setup>
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  successMessage: {
    type: String,
    default: '复制成功！'
  },
  duration: {
    type: Number,
    default: 2000 // 提示消息显示时间，单位毫秒
  }
});

const showTooltip = ref(false);

const copyToClipboard = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(props.text)
      .then(() => {
        showTooltip.value = true;
        setTimeout(() => {
          showTooltip.value = false;
        }, props.duration);
      })
      .catch(err => {
        console.error('复制失败:', err);
        fallbackCopyToClipboard(props.text);
      });
  } else {
    fallbackCopyToClipboard(props.text);
  }
};

const fallbackCopyToClipboard = (text) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showTooltip.value = true;
      setTimeout(() => {
        showTooltip.value = false;
      }, props.duration);
    }
  } catch (err) {
    console.error('回退复制方法失败:', err);
  }
  
  document.body.removeChild(textArea);
};
</script>

<template>
  <div class="clickable-copy">
    <span @click="copyToClipboard" class="copy-text">{{ text }}</span>
    <div class="tooltip" :class="{ active: showTooltip }">
      {{ successMessage }}
    </div>
  </div>
</template>

<style scoped>
.clickable-copy {
  position: relative;
  display: inline-block;
}

.copy-text {
  cursor: pointer;
  border-bottom: 1px dashed #ccc;
}

.copy-text:hover {
  border-bottom-color: var(--vp-c-brand);
}

.tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--vp-c-brand);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
  white-space: nowrap;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--vp-c-brand) transparent transparent transparent;
}

.tooltip.active {
  opacity: 1;
}
</style>