const API_BASE_URL = '/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    try {
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong');
    } catch (e) {
      throw new Error('Something went wrong');
    }
  }
  return response.json();
};

// Helper function to get auth headers
const getAuthHeaders = () => ({
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
});

// Authentication API
export const authService = {
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },
};

// Conversations API
export const conversationService = {
  getConversations: async () => {
    const response = await fetch(`${API_BASE_URL}/conversations`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  createConversation: async (conversationData) => {
    const response = await fetch(`${API_BASE_URL}/conversations`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conversationData),
    });
    return handleResponse(response);
  },

  getConversationDetails: async (conversationId) => {
    const response = await fetch(`${API_BASE_URL}/conversations/${conversationId}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Messages API
export const messageService = {
  getMessages: async (conversationId) => {
    const response = await fetch(`${API_BASE_URL}/messages/${conversationId}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  sendMessage: async (messageData) => {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });
    return handleResponse(response);
  },
};

// Documents API
export const documentService = {
  getDocuments: async () => {
    const response = await fetch(`${API_BASE_URL}/documents`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  uploadDocument: async (documentData) => {
    const formData = new FormData();
    formData.append('file', documentData.file);
    if (documentData.metadata) {
      formData.append('metadata', JSON.stringify(documentData.metadata));
    }

    const response = await fetch(`${API_BASE_URL}/documents`, {
      method: 'POST',
      headers: getAuthHeaders(), // Don't add Content-Type for FormData; fetch sets it automatically
      body: formData,
    });
    return handleResponse(response);
  },

  getDocumentDetails: async (documentId) => {
    const response = await fetch(`${API_BASE_URL}/documents/${documentId}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Notifications API
export const notificationService = {
  getNotifications: async () => {
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  markAsRead: async (notificationId) => {
    const response = await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};
