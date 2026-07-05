import { chromium } from 'playwright'

const SCRATCH =
  'C:/Users/GANTAS~1/AppData/Local/Temp/claude/c--Users-GantaSaiSirriishaAS-workspace-internal-cp/23937a62-d24d-4125-a993-b0fe27cf008e/scratchpad'

const browser = await chromium.launch()

// Desktop: open quote modal from navbar
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text())
})
await page.goto('http://localhost:5188', { waitUntil: 'networkidle' })
await page.click('button.navbar__cta')
await page.waitForSelector('.modal__panel')
await page.screenshot({ path: `${SCRATCH}/quote-modal-desktop.png` })

// Fill and check validation doesn't block sensible data (won't actually submit since endpoint is placeholder)
await page.fill('#field-name', 'Test User')
await page.fill('#field-email', 'test@example.com')
await page.fill('#field-phone', '9999999999')
await page.selectOption('#field-service', 'residential')
await page.fill('#field-location', 'Hyderabad')
await page.fill('#field-details', 'Sample project details for verification.')
await page.screenshot({ path: `${SCRATCH}/quote-modal-filled.png` })

await page.keyboard.press('Escape')
await page.waitForTimeout(200)
const modalGoneAfterEscape = (await page.locator('.modal__panel').count()) === 0
console.log('modal closed on escape:', modalGoneAfterEscape)

// Scroll to contact form
await page.locator('#contact').scrollIntoViewIfNeeded()
await page.screenshot({ path: `${SCRATCH}/contact-form-desktop.png` })

// Mobile check of modal
const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } })
await mobilePage.goto('http://localhost:5188', { waitUntil: 'networkidle' })
await mobilePage.click('.navbar__toggle')
await mobilePage.click('button.navbar__cta')
await mobilePage.waitForSelector('.modal__panel')
await mobilePage.screenshot({ path: `${SCRATCH}/quote-modal-mobile.png` })
await mobilePage.locator('#contact').scrollIntoViewIfNeeded({ timeout: 2000 }).catch(() => {})

console.log('console errors:', errors)
await browser.close()
console.log('done')
