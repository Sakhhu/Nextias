import { 
  doc, 
  getDoc, 
  updateDoc, 
  setDoc,
  query, 
  where, 
  getDocs,
  collection
} from "firebase/firestore";
import { db } from "./firebaseConfig";

// Get user profile
export const getUserProfile = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, error: "User not found" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update user profile
export const updateUserProfile = async (uid, profileData) => {
  try {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      profile: profileData,
      updatedAt: new Date()
    });
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update user progress
export const updateUserProgress = async (uid, progressData) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const currentProgress = docSnap.data().progress || {};
      const updatedProgress = { ...currentProgress, ...progressData };
      
      await updateDoc(docRef, {
        progress: updatedProgress,
        updatedAt: new Date()
      });
      
      return { success: true, data: updatedProgress };
    }
    
    return { success: false, error: "User not found" };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get user enrolled courses
export const getUserCourses = async (uid) => {
  try {
    const coursesRef = collection(db, "userCourses");
    const q = query(coursesRef, where("userId", "==", uid));
    const querySnapshot = await getDocs(q);
    
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, courses };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Enroll user in course
export const enrollInCourse = async (uid, courseId) => {
  try {
    const enrollmentData = {
      userId: uid,
      courseId: courseId,
      enrolledAt: new Date(),
      progress: 0,
      completed: false,
      lastAccessed: new Date()
    };
    
    await setDoc(doc(db, "userCourses", `${uid}_${courseId}`), enrollmentData);
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get user test results
export const getUserTestResults = async (uid) => {
  try {
    const testsRef = collection(db, "testResults");
    const q = query(testsRef, where("userId", "==", uid), orderBy("completedAt", "desc"));
    const querySnapshot = await getDocs(q);
    
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, results };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Save test result
export const saveTestResult = async (uid, testResult) => {
  try {
    const resultData = {
      userId: uid,
      ...testResult,
      completedAt: new Date()
    };
    
    await setDoc(doc(db, "testResults", `${uid}_${testResult.testId}_${Date.now()}`), resultData);
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get user activity log
export const getUserActivity = async (uid, limit = 20) => {
  try {
    const activityRef = collection(db, "userActivity");
    const q = query(
      activityRef, 
      where("userId", "==", uid), 
      orderBy("timestamp", "desc"), 
      limit(limit)
    );
    const querySnapshot = await getDocs(q);
    
    const activities = [];
    querySnapshot.forEach((doc) => {
      activities.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, activities };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Log user activity
export const logUserActivity = async (uid, activity) => {
  try {
    const activityData = {
      userId: uid,
      ...activity,
      timestamp: new Date()
    };
    
    await setDoc(doc(db, "userActivity", `${uid}_${Date.now()}`), activityData);
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
