import { test, expect } from '@playwright/test'


test.describe('Validate the Wiki Page', () => {

    test.beforeEach('', async ({page }) => {
        await page.goto('https://wikipedia.org/')
    })

    test('[TS001] Validate Title', async ({ page }) => {
        expect(await page.title()).toBe('Wikipedia')
    })

    test('[TS002] Validate url', async ({ page }) => {
        expect(page.url()).toBe('https://www.wikipedia.org/')
        expect(page.url()).toContain('wikipedia')
    })
    test('[TS003] Validate search input', async ({ page }) => {
        await expect(page.locator('#searchInput')).toBeEmpty()
    })
})