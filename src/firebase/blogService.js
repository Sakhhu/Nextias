import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  startAfter
} from "firebase/firestore";
import { db } from "./firebaseConfig";

// Blog posts collection reference
const blogCollection = collection(db, "blogPosts");

// Get all blog posts
export const getBlogPosts = async (lastDoc = null, pageSize = 10) => {
  try {
    let q = query(blogCollection, orderBy("createdAt", "desc"), limit(pageSize));
    
    if (lastDoc) {
      q = query(blogCollection, orderBy("createdAt", "desc"), startAfter(lastDoc), limit(pageSize));
    }
    
    const querySnapshot = await getDocs(q);
    const posts = [];
    let lastVisible = null;
    
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
      lastVisible = doc;
    });
    
    return { 
      success: true, 
      posts, 
      lastVisible,
      hasMore: posts.length === pageSize
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get blog post by ID
export const getBlogPostById = async (id) => {
  try {
    const docRef = doc(db, "blogPosts", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, post: { id: docSnap.id, ...docSnap.data() } };
    } else {
      return { success: false, error: "Blog post not found" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Create new blog post
export const createBlogPost = async (postData) => {
  try {
    const docRef = await addDoc(blogCollection, {
      ...postData,
      createdAt: new Date(),
      updatedAt: new Date(),
      views: 0,
      likes: 0,
      status: 'published'
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update blog post
export const updateBlogPost = async (id, postData) => {
  try {
    const docRef = doc(db, "blogPosts", id);
    await updateDoc(docRef, {
      ...postData,
      updatedAt: new Date()
    });
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete blog post
export const deleteBlogPost = async (id) => {
  try {
    await deleteDoc(doc(db, "blogPosts", id));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get blog posts by category
export const getBlogPostsByCategory = async (category, pageSize = 10) => {
  try {
    const q = query(
      blogCollection, 
      where("category", "==", category),
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );
    
    const querySnapshot = await getDocs(q);
    const posts = [];
    
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, posts };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Search blog posts
export const searchBlogPosts = async (searchTerm, pageSize = 10) => {
  try {
    // Note: Firestore doesn't support full-text search natively
    // This is a simple implementation that searches titles and excerpts
    const q = query(
      blogCollection, 
      orderBy("createdAt", "desc"),
      limit(pageSize * 2) // Get more posts to filter client-side
    );
    
    const querySnapshot = await getDocs(q);
    const posts = [];
    
    querySnapshot.forEach((doc) => {
      const postData = { id: doc.id, ...doc.data() };
      const searchLower = searchTerm.toLowerCase();
      
      if (
        postData.title.toLowerCase().includes(searchLower) ||
        postData.excerpt.toLowerCase().includes(searchLower) ||
        postData.content.toLowerCase().includes(searchLower)
      ) {
        posts.push(postData);
      }
    });
    
    return { success: true, posts: posts.slice(0, pageSize) };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Increment blog post views
export const incrementBlogViews = async (id) => {
  try {
    const docRef = doc(db, "blogPosts", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const currentViews = docSnap.data().views || 0;
      await updateDoc(docRef, { views: currentViews + 1 });
      return { success: true };
    }
    
    return { success: false, error: "Blog post not found" };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
