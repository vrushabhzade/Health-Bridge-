# 🔧 Symptom Checker Fix - API Key Issue

## Problem Identified

The AI Symptom Checker is showing the error:
> "I'm having trouble connecting to my medical intelligence database."

**Root Cause**: The Google Gemini API key is either:
1. Invalid or expired
2. Has quota/billing restrictions
3. Doesn't have permission for the current models

## Solution: Generate a New API Key

### Step 1: Get a New Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy the new API key

### Step 2: Update the API Key in Your Code

**File to edit**: `src/services/ai.js`

**Line 6** - Replace the current API key:
```javascript
const API_KEY = "YOUR_NEW_API_KEY_HERE";
```

### Step 3: Test the Fix

1. Save the file
2. The dev server will auto-reload
3. Try the symptom checker again
4. You should now see AI responses!

## Current Model Configuration

The app is configured to use: **`gemini-2.5-flash`**
- This is the current stable model (as of January 2026)
- Fast and cost-effective
- Retires: June 17, 2026

### Alternative Models (if needed)

If `gemini-2.5-flash` doesn't work, try these in order:

1. **`gemini-3-flash-preview`** - Latest fast model (preview)
2. **`gemini-2.5-pro`** - More powerful, slower
3. **`gemini-3-pro-preview`** - Latest powerful model (preview)

To change the model, edit line 10 in `src/services/ai.js`:
```javascript
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
```

## Temporary Workaround (Optional)

If you can't get a new API key immediately, you can:

1. **Use Mock Data** - Modify the symptom checker to show dataset insights only
2. **Use a Different AI Service** - Switch to OpenAI, Anthropic, etc.

## What I've Already Fixed

✅ Updated model from deprecated `gemini-pro` to `gemini-2.5-flash`
✅ Added comprehensive error logging
✅ Added graceful fallback for dataset loading
✅ Improved error messages

## Next Steps

1. **Get new API key** from Google AI Studio
2. **Update** `src/services/ai.js` line 6
3. **Test** the symptom checker
4. **Check browser console** (F12) for detailed logs

## Verification

After updating the API key, you should see in the browser console:
```
🔍 Starting symptom analysis...
📊 Loading dataset...
✅ Dataset loaded: 1001 records
🔎 Finding similar cases...
✅ Found X similar cases
✅ Insights formatted: {...}
🤖 Calling Gemini AI...
✅ AI response received: ...
```

If you see `❌ AI Analysis Error`, check the error details in the console.

## Need Help?

If the issue persists after getting a new API key:
1. Share the browser console error (F12 → Console)
2. Verify the API key is active in Google AI Studio
3. Check if there are any billing/quota issues

---

**Quick Fix Command**: Just update line 6 in `src/services/ai.js` with your new API key!
