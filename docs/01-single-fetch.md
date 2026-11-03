# Step 1 — Single User Fetch (useEffect)
Goal: Learn basic REST + React data fetch.
- API: GET /api/user/[id] (see src/app/api/user/[id]/route.ts)
- Task: In src/app/page.tsx fetch /api/user/1 on mount, handle loading.
- Verify: npm run dev → page shows "Ada — engineer", 404 for 999.
