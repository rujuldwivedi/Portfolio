# Experience logos — match the Adobe card

**Adobe looks best because:** true transparency + strong color + high resolution.

For **LatentView** and **IIT Goa**, use files that match that:

1. **Real transparency**  
   PNG-24 **with alpha**, not a white rectangle. In Figma/Photoshop/Photopea: remove the white (or grey checker) behind the mark, then export PNG.  
   *Checkerboard visible in the image file = bad export; fix the source.*

2. **Size**  
   At least **~400px** on the longer side (like a crisp marketing logo). The site scales them down; small source PNGs look soft.

3. **SVG**  
   If you have official vector logos, SVG is ideal — sharp at any size. Save as `logo-latentview.svg` and update paths in `data/resume.json` if needed.

4. **Naming**  
   Keep `images/logo-latentview.png` and `images/logo-iitgoa.png` or change the `"logo"` fields in `resume.json`.

After replacing the files, hard-refresh the browser (Ctrl+Shift+R).
