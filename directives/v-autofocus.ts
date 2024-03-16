import type { DirectiveBinding } from 'vue'

export const vAutofocus = {
	mounted: (el: HTMLInputElement, binding: DirectiveBinding) => {
		if (binding.value) {
			if (el.tagName === 'INPUT') el.focus()
			else
				console.warn(
					'v-autofocus directive requires a <Input> element, found ' +
						el.tagName
				)
		}
	}
}
