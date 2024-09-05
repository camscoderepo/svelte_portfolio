<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { onMount } from 'svelte';

	// Stores
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	

	const modalStore = getModalStore();
	
	let name: string = '';
	let tel: string = '';
	let email: string = '';
	let message: string = '';
	

	


	async function onFormSubmit(event: Event) {
		event.preventDefault();

		 // Perform client-side validation
		//  if (!name || !email || !message) {
      	// 	alert('Name, email and message fields are required!');
      	// 	return;
    	// }
		
		// Execute reCAPTCHA and get token
		const token = await new Promise<string>((resolve, reject) => {
			grecaptcha.enterprise.ready(() => {
				grecaptcha.enterprise.execute('6LckpDcqAAAAAAHfvG9WgqGdqvHjNht_reTp1Me9', { action: 'submit' })
					.then((token: string) => resolve(token))
					.catch(reject);
			})
		})
		
		const formData = {
			to: 'cameron.roman@icloud.com',
			subject: 'New Form Submission',
			body: `Name: ${name}\nPhone: ${tel}\nEmail: ${email}\nMessage: ${message}`,
			token, //reCAPTCHA token
			
		};

		try {
		const response = await fetch('/api/sendEmail', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();

		if (response.ok) {
			console.log(result.message);
			// Optionally, display a success message to the user
		} 
		
		} catch (error) {
		console.error('Error:', error);
		// Optionally, display an error message to the user
		}

		if ($modalStore[0].response) $modalStore[0].response(formData);
		closeModal();

	}
	

	function closeModal(): void {
    	modalStore.close();
  }

  function onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      closeModal();
    }
  }


  // Add this event listener when the component is mounted
  onMount(() => {
    window.addEventListener('keydown', onKeyDown);

    // Cleanup the event listener when the component is destroyed
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 dark:bg-gray-900 dark:bg-opacity-80" on:click={onBackdropClick} on:keydown={onKeyDown} tabindex={0} role="button">
		<div class="bg-white p-6 shadow-lg max-w-lg w-full rounded-none dark:bg-gray-800 dark:text-gray-200">
			<header class="text-2xl font-semibold mb-4 dark:text-white">{$modalStore[0].title ?? '(title missing)'}</header>
			<article class="mb-4 dark:text-gray-300">{$modalStore[0].body ?? '(body missing)'}</article>
			<form on:submit|preventDefault={onFormSubmit} class="space-y-4">
				<label class="block">
					<span class="text-sm font-medium dark:text-gray-300">Name</span>
					<input class="mt-1 block w-full border border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-none" type="text" bind:value={name} placeholder="Enter name..." required />
				</label>
				<label class="block">
					<span class="text-sm font-medium dark:text-gray-300">Phone Number</span>
					<input class="mt-1 block w-full border border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-none" type="tel" bind:value={tel} placeholder="Enter phone..." />
				</label>
				<label class="block">
					<span class="text-sm font-medium dark:text-gray-300">Email</span>
					<input class="mt-1 block w-full border border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-none" type="email" bind:value={email} placeholder="Enter email address..." required />
				</label>
				<label class="block">
					<span class="text-sm font-medium dark:text-gray-300">Message</span>
					<textarea class="mt-1 block w-full border border-gray-300 p-2 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 rounded-none" bind:value={message} required placeholder="Enter message here..." ></textarea>
				</label>
			
				<footer class="flex justify-end space-x-2 mt-4">
					<button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-none" on:click={closeModal}>Cancel</button>
					<button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700 rounded-none" data-sitekey="6LckpDcqAAAAAAHfvG9WgqGdqvHjNht_reTp1Me9" data-callback='onSubmit' data-action='submit' type='submit'>Submit</button>
				</footer>
			</form>
		</div>
	</div>
{/if}