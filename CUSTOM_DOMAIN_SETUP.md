# Custom Domain Setup for axelvh.dev

## What I've Updated

✅ Changed `base` in `vite.config.js` from `/axeldev/` to `/`
✅ Removed `basename` from BrowserRouter in `src/main.jsx`
✅ Created `public/CNAME` file with your domain `axelvh.dev`

## DNS Configuration

You need to configure DNS records with your domain registrar (wherever you bought axelvh.dev). Here are the records to add:

### Option 1: Using an Apex Domain (axelvh.dev)

Add these **4 A records** pointing to GitHub's servers:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Option 2: If you want www.axelvh.dev to also work

Add a **CNAME record**:

```
Type: CNAME
Name: www
Value: axelvandenheuvel.github.io
```

### Recommended: Use both options above

This way both `axelvh.dev` and `www.axelvh.dev` will work!

## Steps to Complete Setup

### 1. Configure DNS (at your domain registrar)

Go to your domain registrar's DNS settings and add the records above. Common registrars:
- **Namecheap**: Dashboard → Domain List → Manage → Advanced DNS
- **GoDaddy**: My Products → Domains → DNS
- **Cloudflare**: Select domain → DNS → Records
- **Google Domains**: My domains → DNS

⚠️ **Note**: DNS changes can take 24-48 hours to propagate, but usually happen within an hour.

### 2. Push Your Code

```bash
git add -A
git commit -m "Configure custom domain axelvh.dev"
git push
```

### 3. Configure GitHub Pages

After pushing, go to your GitHub repository:

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `axelvh.dev`
3. Click **Save**
4. Wait a few minutes, then check the box for **"Enforce HTTPS"** (this will appear after GitHub verifies your domain)

## Verification

### Check DNS Propagation

You can verify your DNS is set up correctly:

```bash
# Check A records
dig axelvh.dev +noall +answer

# Expected output should show the 4 GitHub IPs:
# axelvh.dev.  3600  IN  A  185.199.108.153
# axelvh.dev.  3600  IN  A  185.199.109.153
# axelvh.dev.  3600  IN  A  185.199.110.153
# axelvh.dev.  3600  IN  A  185.199.111.153
```

Or use an online tool: https://www.whatsmydns.net/#A/axelvh.dev

### Test Your Site

Once DNS propagates:
- Visit `https://axelvh.dev` - should work!
- Visit `https://www.axelvh.dev` - should work if you added the CNAME!
- Old URL `https://axelvandenheuvel.github.io/axeldev/` - will redirect to your custom domain

## Troubleshooting

### "Domain is not properly configured"
- Wait 1-2 hours for DNS to propagate
- Double-check your A records match the GitHub IPs exactly
- Make sure you're using `@` for the hostname (some registrars use blank or your domain name)

### "HTTPS not available"
- Wait a few minutes after adding the custom domain
- GitHub needs to provision an SSL certificate (usually takes 5-10 minutes)
- If it takes longer than 1 hour, try removing and re-adding the custom domain in GitHub settings

### Site shows 404
- Make sure the CNAME file is in the `public/` folder
- Make sure you've pushed the changes to GitHub
- Try clearing your browser cache

### Images or assets not loading
- This was fixed by changing `base: '/'` in vite.config.js
- Make sure all images use the import syntax (not relative paths)
- Clear browser cache and hard reload (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

## SSL/HTTPS

GitHub Pages automatically provides free HTTPS for custom domains using Let's Encrypt. After your domain is verified, just enable "Enforce HTTPS" in your repository settings.

## Next Steps After DNS Setup

1. **Wait for DNS propagation** (check with `dig` or whatsmydns.net)
2. **Push your code** (I'll help you with this next)
3. **Configure custom domain in GitHub** (Settings → Pages → Custom domain)
4. **Enable HTTPS** (wait a few minutes, then check the box)

Your site will then be live at `https://axelvh.dev`! 🎉

