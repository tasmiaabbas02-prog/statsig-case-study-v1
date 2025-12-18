"use client";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download, ChevronDown, ChevronRight, BarChart3 } from 'lucide-react';

// Interactive Figma Prototype Component
const InteractiveFigmaPrototype = () => {
  const [selectedExperiment, setSelectedExperiment] = useState('');
  const [dateRange, setDateRange] = useState('30');
  const [segment, setSegment] = useState('');
  const [qualitativeIntegrations, setQualitativeIntegrations] = useState([]);
  const [analysisRun, setAnalysisRun] = useState(false);

  const experiments = ['Search Algorithm Update', 'Checkout Flow Redesign', 'Payment Options Expansion'];
  const segments = ['All Users', 'New Customers', 'Returning Customers', 'Power Users'];

  const handleRunAnalysis = () => {
    if (selectedExperiment) {
      setAnalysisRun(true);
    }
  };

  return (
    <div style={{
      background: '#f9fafb',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      padding: '2rem',
      minHeight: '600px'
    }}>
      <h5 style={{
        fontSize: '1.125rem',
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '1.5rem'
      }}>
        Change Intelligence
      </h5>
      
      {/* Filter Row - All on one line */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem',
        alignItems: 'end'
      }}>
        {/* Experiment Selector */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            marginBottom: '0.5rem'
          }}>
            Experiment
          </label>
          <select
            value={selectedExperiment}
            onChange={(e) => setSelectedExperiment(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.813rem',
              background: '#ffffff'
            }}
          >
            <option value="">Select...</option>
            {experiments.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            marginBottom: '0.5rem'
          }}>
            Date Range
          </label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.813rem',
              background: '#ffffff'
            }}
            disabled={!selectedExperiment}
          >
            <option value="7">Last 7 days</option>
            <option value="14">Last 14 days</option>
            <option value="30">Last 30 days</option>
          </select>
        </div>

        {/* Segment */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            marginBottom: '0.5rem'
          }}>
            Segment
          </label>
          <select
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.813rem',
              background: '#ffffff'
            }}
            disabled={!dateRange}
          >
            <option value="">All Users</option>
            {segments.map(seg => (
              <option key={seg} value={seg}>{seg}</option>
            ))}
          </select>
        </div>

        {/* Run Analysis Button */}
        <div>
          <button
            onClick={handleRunAnalysis}
            disabled={!selectedExperiment}
            style={{
              width: '100%',
              padding: '0.5rem 1rem',
              background: selectedExperiment ? '#2563eb' : '#d1d5db',
              color: '#ffffff',
              borderRadius: '6px',
              fontSize: '0.813rem',
              fontWeight: 600,
              border: 'none',
              cursor: selectedExperiment ? 'pointer' : 'not-allowed',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => {
              if (selectedExperiment) {
                e.target.style.background = '#1d4ed8';
              }
            }}
            onMouseOut={(e) => {
              if (selectedExperiment) {
                e.target.style.background = '#2563eb';
              }
            }}
          >
            Run Analysis
          </button>
        </div>
      </div>

      {/* Analysis Results Section */}
      {analysisRun && (
        <div>
          <div style={{
            borderTop: '2px solid #e5e7eb',
            paddingTop: '1.5rem',
            marginTop: '1rem'
          }}>
            <h6 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Analysis Results
            </h6>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* Graph Placeholder */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '1.5rem',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center', color: '#9ca3af' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📊</div>
                  <div style={{ fontSize: '0.875rem' }}>Metric Trends Graph</div>
                </div>
              </div>

              {/* AI Insights */}
              <div>
                <div style={{
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: '6px',
                  padding: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    fontSize: '0.813rem',
                    fontWeight: 600,
                    color: '#1e40af',
                    marginBottom: '0.5rem'
                  }}>
                    🔍 Significant Change Detected
                  </div>
                  <div style={{ fontSize: '0.813rem', color: '#1f2937', lineHeight: 1.6 }}>
                    {selectedExperiment === 'Search Algorithm Update' 
                      ? 'Conversion rate increased 23% for the treatment group. The change is statistically significant (p < 0.01).'
                      : selectedExperiment === 'Checkout Flow Redesign'
                      ? 'Cart abandonment decreased 18% in the new checkout flow. Most impact seen in mobile users.'
                      : 'Revenue per user increased 15% with expanded payment options. Credit card users converted 22% more.'}
                  </div>
                </div>
                <div style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '6px',
                  padding: '1rem'
                }}>
                  <div style={{
                    fontSize: '0.813rem',
                    fontWeight: 600,
                    color: '#166534',
                    marginBottom: '0.5rem'
                  }}>
                    💡 Recommended Action
                  </div>
                  <div style={{ fontSize: '0.813rem', color: '#1f2937', lineHeight: 1.6 }}>
                    Ship to 100% of users. Monitor bounce rate and session duration for the next 7 days to ensure sustained impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Problem Space Dropdowns Component
const ProblemSpaceDropdowns = () => {
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const problemSpaces = [
    {
      title: 'I need to understand why key metrics shift so I do not spend hours digging for answers',
      userStory: 'As a PM, I want to understand the key drivers behind metric shifts so that I can diagnose issues quickly without hours of manual investigation',
      solutions: [
        'Automated change analysis engine that identifies likely drivers behind a metric shift',
        'Visual timeline of all events, rollouts, and anomalies aligned against metric movements',
        'Segment-level diff explorer to surface groups that behaved differently',
        'One-click "explain this metric" summary with ranked contributing factors'
      ]
    },
    {
      title: 'I need awareness of similar experimentation activity in other areas of the business so my experiment results are not distorted',
      userStory: 'As a PM, I want visibility into experiments and launches across other teams so that I can avoid collisions that could distort my experiment results',
      solutions: [
        'Cross-team experiment radar showing overlapping audiences, metrics, or timings',
        'Collision alerts when another test could interfere with your results',
        'Team activity feed summarizing relevant launches and changes'
      ]
    },
    {
      title: 'I need clarity on which experimentation efforts or strategies are creating the most impact across teams',
      userStory: 'As a PM, I want to see which experiments and strategies create the most impact so that I can prioritize high-value initiatives',
      solutions: [
        'Experiment leaderboard ranking initiatives by impact, cost, and reliability',
        'Strategy insights dashboard that surfaces themes driving the most value',
        'Portfolio view of all experiments categorized by impact vs effort',
        'Auto-generated summaries of top-performing strategies'
      ]
    },
    {
      title: 'I need a way to surface usability issues and user friction early without relying on slow, manual testing cycles',
      userStory: 'As a PM, I want to surface usability issues early through automated signals so that I do not rely on slow, manual user testing cycles',
      solutions: [
        'Automated usability tester that runs synthetic flows through prototypes',
        'Task success predictor showing probable user failure points',
        'Interactive heatmap of predicted friction areas',
        'Integrated plug-ins for lightweight human validation'
      ]
    }
  ];

  return (
    <div style={{ display: 'grid', gap: '1.25rem' }}>
      {problemSpaces.map((problem, index) => (
        <div 
          key={index}
          style={{
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            transition: 'box-shadow 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)'}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'}
        >
          <div
            onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
            style={{
              padding: '1.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              background: openDropdown === index ? '#f9fafb' : '#ffffff',
              transition: 'background 0.2s',
              borderLeft: openDropdown === index ? '4px solid #2563eb' : '4px solid transparent'
            }}
          >
            <div style={{ flex: 1, paddingRight: '1.5rem' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#2563eb',
                marginBottom: '0.5rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Problem Statement
              </div>
              <div style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#1f2937',
                fontWeight: 500
              }}>
                {problem.title}
              </div>
            </div>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#2563eb"
              strokeWidth="2"
              style={{
                transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
                flexShrink: 0
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {openDropdown === index && (
            <div style={{
              borderTop: '1px solid #e5e7eb',
              background: '#f9fafb'
            }}>
              {/* User Story */}
              <div style={{
                padding: '1.75rem',
                background: 'rgba(37, 99, 235, 0.04)',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#64748b',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  User Story
                </div>
                <div style={{
                  fontSize: '0.938rem',
                  lineHeight: 1.7,
                  color: '#374151',
                  fontStyle: 'italic',
                  padding: '1rem 1.25rem',
                  background: '#ffffff',
                  borderRadius: '8px',
                  borderLeft: '3px solid #64748b'
                }}>
                  {problem.userStory}
                </div>
              </div>

              {/* Solution Ideas */}
              <div style={{ padding: '1.75rem' }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#475569',
                  marginBottom: '1rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Solution Ideas
                </div>
                <div style={{ display: 'grid', gap: '0.875rem' }}>
                  {problem.solutions.map((solution, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '1.125rem 1.25rem',
                        background: '#ffffff',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        color: '#4b5563',
                        lineHeight: 1.6,
                        border: '1px solid #e5e7eb',
                        transition: 'border-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Key Design Decisions Dropdown Component
const KeyDesignDecisionsDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const decisions = [
    {
      title: 'Experiment Selector Redesign',
      description: 'Redesigned experiment selector to show Recently Modified, Active, and Ended experiments instead of alphabetical scroll.'
    },
    {
      title: 'Sequential Filter Flow',
      description: 'Introduced sequential filter flow where date and metrics become contextual after experiment selection.'
    },
    {
      title: 'Customer Segmentation',
      description: 'Added customer segmentation based on PM feedback that segmentation reveals diagnostic insights. PMs told me the only way they diagnose why metrics move is by slicing and dicing the data as much as possible by these key segments.'
    },
    {
      title: 'AI Feedback Loop',
      description: 'Created "view more details" modal with accept/reject feedback loop to improve AI over time.'
    },
    {
      title: 'Confidence Scores with Evidence Tags',
      description: 'Added confidence levels (High/Medium/Low) with specific evidence tags like "Based on 1.2M sessions" and "Statistically significant at 95%" to help PMs evaluate AI recommendation credibility.'
    },
    {
      title: 'Comparative Segmentation Toggle',
      description: 'Introduced "Compare against" toggle to enable multi-cohort analysis simultaneously, allowing PMs to spot segment-specific patterns without switching between views.'
    },
    {
      title: 'Elevated Anomaly Detection',
      description: 'Moved anomaly detection higher in the interface hierarchy. Anomalies create urgency and are the primary driver for PM engagement with Change Intelligence.'
    }
  ];

  return (
    <div style={{
      marginTop: '4rem',
      marginBottom: '4rem',
      padding: '2.5rem',
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          marginBottom: isOpen ? '2rem' : '0'
        }}
      >
        <div>
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            Key Design Decisions
          </h4>
          <p style={{
            fontSize: '0.938rem',
            color: '#6b7280',
            margin: 0
          }}>
            Product decisions made when translating Figma to interactive MVP
          </p>
        </div>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#2563eb"
          strokeWidth="2"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
            flexShrink: 0,
            marginLeft: '1rem'
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          paddingTop: '1rem'
        }}>
          {decisions.map((decision, i) => (
            <div 
              key={i}
              style={{
                padding: '1.75rem',
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                transition: 'box-shadow 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '0.75rem'
              }}>
                {decision.title}
              </div>
              <div style={{
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: '#4b5563'
              }}>
                {decision.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download, ChevronDown, ChevronRight, BarChart3 } from 'lucide-react';

// Dynamic Data Based on Experiments - This data changes based on what experiment is selected
const experimentData = {
  "Search Algorithm Update": {
    duration: "Nov 26 - Dec 9",
    startDate: "Nov 26",
    endDate: "Dec 9",
    metrics: {
      "Last 7 days": [
        { date: 'Dec 3', conversion: 52, revenue: 22, sessionDuration: 145, bounceRate: 38, cartAbandonment: 26, pageViews: 213 },
        { date: 'Dec 4', conversion: 48, revenue: 24, sessionDuration: 152, bounceRate: 36, cartAbandonment: 24, pageViews: 219 },
        { date: 'Dec 5', conversion: 55, revenue: 26, sessionDuration: 158, bounceRate: 34, cartAbandonment: 27, pageViews: 225 },
        { date: 'Dec 6', conversion: 58, revenue: 28, sessionDuration: 162, bounceRate: 32, cartAbandonment: 14, pageViews: 230 },
        { date: 'Dec 7', conversion: 62, revenue: 30, sessionDuration: 168, bounceRate: 30, cartAbandonment: 18, pageViews: 255 },
        { date: 'Dec 8', conversion: 60, revenue: 29, sessionDuration: 165, bounceRate: 31, cartAbandonment: 20, pageViews: 253 },
        { date: 'Dec 9', conversion: 65, revenue: 32, sessionDuration: 172, bounceRate: 28, cartAbandonment: 13, pageViews: 156 },
      ],
      "Last 14 days": [
        { date: 'Nov 26', conversion: 42, revenue: 18, sessionDuration: 125, bounceRate: 45, cartAbandonment: 27, pageViews: 219 },
        { date: 'Nov 27', conversion: 44, revenue: 19, sessionDuration: 128, bounceRate: 44, cartAbandonment: 11, pageViews: 300 },
        { date: 'Nov 28', conversion: 46, revenue: 20, sessionDuration: 132, bounceRate: 42, cartAbandonment: 27, pageViews: 196 },
        { date: 'Nov 29', conversion: 48, revenue: 21, sessionDuration: 135, bounceRate: 41, cartAbandonment: 16, pageViews: 237 },
        { date: 'Nov 30', conversion: 50, revenue: 22, sessionDuration: 138, bounceRate: 40, cartAbandonment: 21, pageViews: 273 },
        { date: 'Dec 1', conversion: 51, revenue: 23, sessionDuration: 142, bounceRate: 39, cartAbandonment: 16, pageViews: 266 },
        { date: 'Dec 2', conversion: 53, revenue: 24, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 166 },
        { date: 'Dec 3', conversion: 52, revenue: 22, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 175 },
        { date: 'Dec 4', conversion: 48, revenue: 24, sessionDuration: 152, bounceRate: 36, cartAbandonment: 24, pageViews: 212 },
        { date: 'Dec 5', conversion: 55, revenue: 26, sessionDuration: 158, bounceRate: 34, cartAbandonment: 20, pageViews: 232 },
        { date: 'Dec 6', conversion: 58, revenue: 28, sessionDuration: 162, bounceRate: 32, cartAbandonment: 12, pageViews: 276 },
        { date: 'Dec 7', conversion: 62, revenue: 30, sessionDuration: 168, bounceRate: 30, cartAbandonment: 10, pageViews: 187 },
        { date: 'Dec 8', conversion: 60, revenue: 29, sessionDuration: 165, bounceRate: 31, cartAbandonment: 12, pageViews: 226 },
        { date: 'Dec 9', conversion: 65, revenue: 32, sessionDuration: 172, bounceRate: 28, cartAbandonment: 21, pageViews: 224 },
      ]
,
      "Last 30 days": [
        { date: 'Nov 10', conversion: 40, revenue: 20, sessionDuration: 120, bounceRate: 48, cartAbandonment: 28, pageViews: 190 },
        { date: 'Nov 11', conversion: 42, revenue: 21, sessionDuration: 122, bounceRate: 47, cartAbandonment: 27, pageViews: 195 },
        { date: 'Nov 12', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 200 },
        { date: 'Nov 13', conversion: 41, revenue: 21, sessionDuration: 123, bounceRate: 47, cartAbandonment: 28, pageViews: 192 },
        { date: 'Nov 14', conversion: 44, revenue: 22, sessionDuration: 126, bounceRate: 46, cartAbandonment: 25, pageViews: 198 },
        { date: 'Nov 15', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 205 },
        { date: 'Nov 16', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 197 },
        { date: 'Nov 17', conversion: 46, revenue: 24, sessionDuration: 130, bounceRate: 44, cartAbandonment: 23, pageViews: 210 },
        { date: 'Nov 18', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 215 },
        { date: 'Nov 19', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 208 },
        { date: 'Nov 20', conversion: 48, revenue: 25, sessionDuration: 134, bounceRate: 42, cartAbandonment: 21, pageViews: 220 },
        { date: 'Nov 21', conversion: 49, revenue: 26, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 225 },
        { date: 'Nov 22', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 218 },
        { date: 'Nov 23', conversion: 50, revenue: 26, sessionDuration: 138, bounceRate: 40, cartAbandonment: 19, pageViews: 230 },
        { date: 'Nov 24', conversion: 51, revenue: 27, sessionDuration: 140, bounceRate: 39, cartAbandonment: 18, pageViews: 235 },
        { date: 'Nov 25', conversion: 49, revenue: 25, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 228 },
        { date: 'Nov 26', conversion: 42, revenue: 18, sessionDuration: 125, bounceRate: 45, cartAbandonment: 27, pageViews: 219 },
        { date: 'Nov 27', conversion: 44, revenue: 19, sessionDuration: 128, bounceRate: 44, cartAbandonment: 11, pageViews: 300 },
        { date: 'Nov 28', conversion: 46, revenue: 20, sessionDuration: 132, bounceRate: 42, cartAbandonment: 27, pageViews: 196 },
        { date: 'Nov 29', conversion: 48, revenue: 21, sessionDuration: 135, bounceRate: 41, cartAbandonment: 16, pageViews: 237 },
        { date: 'Nov 30', conversion: 50, revenue: 22, sessionDuration: 138, bounceRate: 40, cartAbandonment: 21, pageViews: 273 },
        { date: 'Dec 1', conversion: 51, revenue: 23, sessionDuration: 142, bounceRate: 39, cartAbandonment: 16, pageViews: 266 },
        { date: 'Dec 2', conversion: 53, revenue: 24, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 166 },
        { date: 'Dec 3', conversion: 52, revenue: 22, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 175 },
        { date: 'Dec 4', conversion: 48, revenue: 24, sessionDuration: 152, bounceRate: 36, cartAbandonment: 24, pageViews: 212 },
        { date: 'Dec 5', conversion: 55, revenue: 26, sessionDuration: 158, bounceRate: 34, cartAbandonment: 20, pageViews: 232 },
        { date: 'Dec 6', conversion: 58, revenue: 28, sessionDuration: 162, bounceRate: 32, cartAbandonment: 12, pageViews: 276 },
        { date: 'Dec 7', conversion: 62, revenue: 30, sessionDuration: 168, bounceRate: 30, cartAbandonment: 10, pageViews: 187 },
        { date: 'Dec 8', conversion: 60, revenue: 29, sessionDuration: 165, bounceRate: 31, cartAbandonment: 12, pageViews: 226 },
        { date: 'Dec 9', conversion: 65, revenue: 32, sessionDuration: 172, bounceRate: 28, cartAbandonment: 21, pageViews: 224 },
      ]

    },
    events: [
      { icon: "🚀", date: "Dec 1", label: "Experiment started", color: "blue" },
      { icon: "🔍", date: "Dec 4", label: "Algorithm v2 deployed", color: "purple" },
      { icon: "📈", date: "Dec 7", label: "Search traffic spike", color: "green" },
    ],
    insights: {
      aiAnalysis: [
        {
          title: 'Search Relevance Improvement',
          description: 'The new algorithm shows 23% better click-through rates on search results, indicating improved relevance.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 1.2M sessions',
            'Statistically significant at 95%'
          ]
        },
        {
          title: 'Query Processing Time',
          description: 'Average query response time reduced from 180ms to 95ms, significantly improving user experience.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 850K sessions',
            'Consistent across 3 similar past experiments'
          ]
        },
        {
          title: 'Long-tail Query Performance',
          description: 'Conversion rate for rare/complex queries increased by 31%, suggesting better understanding of user intent.',
          confidence: 'Medium',
          impact: 'Positive',
          evidenceTags: [
            'Based on 320K sessions',
            'Statistically significant at 90%'
          ]
        }
      ],
      hypotheses: [
        {
          rank: 1,
          hypothesis: 'Better semantic matching drives higher engagement',
          likelihood: '92%',
          evidence: 'Users spend 45s longer on result pages, 28% more likely to click'
        },
        {
          rank: 2,
          hypothesis: 'Personalized results increase relevance',
          likelihood: '85%',
          evidence: 'Returning users show 34% higher conversion vs first-time users'
        },
        {
          rank: 3,
          hypothesis: 'Faster results reduce bounce rate',
          likelihood: '78%',
          evidence: 'Bounce rate dropped from 45% to 28% after speed optimization'
        }
      ],
      segments: [
        {
          segment: 'Power Users',
          metric: 'Session Duration',
          change: '+42.3%',
          vs: 'Casual users (+18.2%)',
          significance: 'High'
        },
        {
          segment: 'New Customers',
          metric: 'Search Success Rate',
          change: '+28.5%',
          vs: 'Returning customers (+15.1%)',
          significance: 'High'
        },
        {
          segment: 'Mobile Users',
          metric: 'Query Refinement',
          change: '-22.4%',
          vs: 'Desktop users (-8.3%)',
          significance: 'Medium'
        }
      ],
      anomalies: [
        {
          date: 'Dec 4',
          type: 'Algorithm Deploy',
          severity: 'Low',
          description: 'Brief 5-minute spike in error rate during deployment (resolved)',
          status: 'Resolved'
        },
        {
          date: 'Dec 7',
          type: 'Traffic Surge',
          severity: 'Medium',
          description: 'Organic search traffic increased 215% due to viral social media post',
          status: 'Monitoring'
        }
      ],
      behavioral: [
        {
          behavior: 'Search Refinement Pattern',
          observation: 'Users now refine searches 35% less often, suggesting better first-time results',
          action: 'Continue monitoring query satisfaction metrics'
        },
        {
          behavior: 'Result Page Depth',
          observation: 'Users rarely go beyond page 2 (95% stay on page 1)',
          action: 'Focus on optimizing first-page results quality'
        },
        {
          behavior: 'Filter Usage',
          observation: 'Advanced filter usage decreased by 28%, indicating better default results',
          action: 'Consider simplifying filter UI or removing rarely-used filters'
        }
      ]
    }
  },
  "Dynamic Pricing Test": {
    duration: "Nov 20 - Dec 9",
    startDate: "Nov 20",
    endDate: "Dec 9",
    metrics: {
      "Last 7 days": [
        { date: 'Dec 3', conversion: 38, revenue: 32, sessionDuration: 185, bounceRate: 42, cartAbandonment: 16, pageViews: 236 },
        { date: 'Dec 4', conversion: 42, revenue: 35, sessionDuration: 192, bounceRate: 40, cartAbandonment: 26, pageViews: 245 },
        { date: 'Dec 5', conversion: 45, revenue: 38, sessionDuration: 198, bounceRate: 38, cartAbandonment: 17, pageViews: 161 },
        { date: 'Dec 6', conversion: 48, revenue: 41, sessionDuration: 205, bounceRate: 36, cartAbandonment: 25, pageViews: 182 },
        { date: 'Dec 7', conversion: 52, revenue: 44, sessionDuration: 212, bounceRate: 34, cartAbandonment: 20, pageViews: 293 },
        { date: 'Dec 8', conversion: 50, revenue: 43, sessionDuration: 208, bounceRate: 35, cartAbandonment: 26, pageViews: 245 },
        { date: 'Dec 9', conversion: 55, revenue: 47, sessionDuration: 218, bounceRate: 32, cartAbandonment: 12, pageViews: 208 },
      ],
      "Last 14 days": [
        { date: 'Nov 26', conversion: 32, revenue: 28, sessionDuration: 165, bounceRate: 48, cartAbandonment: 13, pageViews: 281 },
        { date: 'Nov 27', conversion: 34, revenue: 29, sessionDuration: 168, bounceRate: 47, cartAbandonment: 12, pageViews: 292 },
        { date: 'Nov 28', conversion: 35, revenue: 30, sessionDuration: 172, bounceRate: 46, cartAbandonment: 16, pageViews: 268 },
        { date: 'Nov 29', conversion: 36, revenue: 31, sessionDuration: 175, bounceRate: 45, cartAbandonment: 22, pageViews: 298 },
        { date: 'Nov 30', conversion: 37, revenue: 31, sessionDuration: 178, bounceRate: 44, cartAbandonment: 19, pageViews: 296 },
        { date: 'Dec 1', conversion: 38, revenue: 32, sessionDuration: 182, bounceRate: 43, cartAbandonment: 29, pageViews: 259 },
        { date: 'Dec 2', conversion: 39, revenue: 33, sessionDuration: 185, bounceRate: 42, cartAbandonment: 25, pageViews: 268 },
        { date: 'Dec 3', conversion: 38, revenue: 32, sessionDuration: 185, bounceRate: 42, cartAbandonment: 20, pageViews: 217 },
        { date: 'Dec 4', conversion: 42, revenue: 35, sessionDuration: 192, bounceRate: 40, cartAbandonment: 17, pageViews: 230 },
        { date: 'Dec 5', conversion: 45, revenue: 38, sessionDuration: 198, bounceRate: 38, cartAbandonment: 30, pageViews: 168 },
        { date: 'Dec 6', conversion: 48, revenue: 41, sessionDuration: 205, bounceRate: 36, cartAbandonment: 19, pageViews: 225 },
        { date: 'Dec 7', conversion: 52, revenue: 44, sessionDuration: 212, bounceRate: 34, cartAbandonment: 20, pageViews: 234 },
        { date: 'Dec 8', conversion: 50, revenue: 43, sessionDuration: 208, bounceRate: 35, cartAbandonment: 29, pageViews: 187 },
        { date: 'Dec 9', conversion: 55, revenue: 47, sessionDuration: 218, bounceRate: 32, cartAbandonment: 29, pageViews: 204 },
      ]
,
      "Last 30 days": [
        { date: 'Nov 10', conversion: 40, revenue: 20, sessionDuration: 120, bounceRate: 48, cartAbandonment: 28, pageViews: 190 },
        { date: 'Nov 11', conversion: 42, revenue: 21, sessionDuration: 122, bounceRate: 47, cartAbandonment: 27, pageViews: 195 },
        { date: 'Nov 12', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 200 },
        { date: 'Nov 13', conversion: 41, revenue: 21, sessionDuration: 123, bounceRate: 47, cartAbandonment: 28, pageViews: 192 },
        { date: 'Nov 14', conversion: 44, revenue: 22, sessionDuration: 126, bounceRate: 46, cartAbandonment: 25, pageViews: 198 },
        { date: 'Nov 15', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 205 },
        { date: 'Nov 16', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 197 },
        { date: 'Nov 17', conversion: 46, revenue: 24, sessionDuration: 130, bounceRate: 44, cartAbandonment: 23, pageViews: 210 },
        { date: 'Nov 18', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 215 },
        { date: 'Nov 19', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 208 },
        { date: 'Nov 20', conversion: 48, revenue: 25, sessionDuration: 134, bounceRate: 42, cartAbandonment: 21, pageViews: 220 },
        { date: 'Nov 21', conversion: 49, revenue: 26, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 225 },
        { date: 'Nov 22', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 218 },
        { date: 'Nov 23', conversion: 50, revenue: 26, sessionDuration: 138, bounceRate: 40, cartAbandonment: 19, pageViews: 230 },
        { date: 'Nov 24', conversion: 51, revenue: 27, sessionDuration: 140, bounceRate: 39, cartAbandonment: 18, pageViews: 235 },
        { date: 'Nov 25', conversion: 49, revenue: 25, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 228 },
        { date: 'Nov 26', conversion: 42, revenue: 18, sessionDuration: 125, bounceRate: 45, cartAbandonment: 27, pageViews: 219 },
        { date: 'Nov 27', conversion: 44, revenue: 19, sessionDuration: 128, bounceRate: 44, cartAbandonment: 11, pageViews: 300 },
        { date: 'Nov 28', conversion: 46, revenue: 20, sessionDuration: 132, bounceRate: 42, cartAbandonment: 27, pageViews: 196 },
        { date: 'Nov 29', conversion: 48, revenue: 21, sessionDuration: 135, bounceRate: 41, cartAbandonment: 16, pageViews: 237 },
        { date: 'Nov 30', conversion: 50, revenue: 22, sessionDuration: 138, bounceRate: 40, cartAbandonment: 21, pageViews: 273 },
        { date: 'Dec 1', conversion: 51, revenue: 23, sessionDuration: 142, bounceRate: 39, cartAbandonment: 16, pageViews: 266 },
        { date: 'Dec 2', conversion: 53, revenue: 24, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 166 },
        { date: 'Dec 3', conversion: 52, revenue: 22, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 175 },
        { date: 'Dec 4', conversion: 48, revenue: 24, sessionDuration: 152, bounceRate: 36, cartAbandonment: 24, pageViews: 212 },
        { date: 'Dec 5', conversion: 55, revenue: 26, sessionDuration: 158, bounceRate: 34, cartAbandonment: 20, pageViews: 232 },
        { date: 'Dec 6', conversion: 58, revenue: 28, sessionDuration: 162, bounceRate: 32, cartAbandonment: 12, pageViews: 276 },
        { date: 'Dec 7', conversion: 62, revenue: 30, sessionDuration: 168, bounceRate: 30, cartAbandonment: 10, pageViews: 187 },
        { date: 'Dec 8', conversion: 60, revenue: 29, sessionDuration: 165, bounceRate: 31, cartAbandonment: 12, pageViews: 226 },
        { date: 'Dec 9', conversion: 65, revenue: 32, sessionDuration: 172, bounceRate: 28, cartAbandonment: 21, pageViews: 224 },
      ]

    },
    events: [
      { icon: "🚀", date: "Dec 1", label: "Pricing test started", color: "blue" },
      { icon: "💰", date: "Dec 3", label: "Price optimization enabled", color: "purple" },
      { icon: "📊", date: "Dec 6", label: "Revenue milestone hit", color: "green" },
      { icon: "🎯", date: "Dec 8", label: "Segment targeting refined", color: "blue" },
    ],
    insights: {
      aiAnalysis: [
        {
          title: 'Price Elasticity Discovery',
          description: 'Premium segment shows 18% higher willingness to pay. Dynamic pricing increased revenue by 32% without hurting conversion.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 2.1M sessions',
            'Consistent across 3 similar past experiments',
            'Statistically significant at 99%'
          ]
        },
        {
          title: 'Time-based Price Sensitivity',
          description: 'Users browsing during business hours (9-5) are 24% less price-sensitive than evening browsers.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 1.8M sessions',
            'Statistically significant at 95%'
          ]
        },
        {
          title: 'Competitive Price Positioning',
          description: 'Price point 8-12% below competitor average maximizes conversion without sacrificing perceived value.',
          confidence: 'Medium',
          impact: 'Neutral',
          evidenceTags: [
            'Based on 650K sessions',
            'Statistically significant at 85%'
          ]
        }
      ],
      hypotheses: [
        {
          rank: 1,
          hypothesis: 'Personalized pricing increases customer lifetime value',
          likelihood: '89%',
          evidence: 'Revenue per user increased 35% while maintaining 92% satisfaction scores'
        },
        {
          rank: 2,
          hypothesis: 'Dynamic discounts reduce cart abandonment',
          likelihood: '82%',
          evidence: 'Abandonment rate decreased 28% when showing time-limited pricing'
        },
        {
          rank: 3,
          hypothesis: 'Price anchoring improves perceived value',
          likelihood: '75%',
          evidence: 'Showing original vs discounted price increased conversion by 19%'
        }
      ],
      segments: [
        {
          segment: 'New Customers',
          metric: 'Revenue per User',
          change: '+42.8%',
          vs: 'Returning customers (+28.3%)',
          significance: 'High'
        },
        {
          segment: 'Business Hours Shoppers',
          metric: 'Average Order Value',
          change: '+31.5%',
          vs: 'Evening shoppers (+12.8%)',
          significance: 'High'
        },
        {
          segment: 'Cart Value >$100',
          metric: 'Conversion Rate',
          change: '+25.2%',
          vs: 'Cart value <$100 (+15.4%)',
          significance: 'Medium'
        }
      ],
      anomalies: [
        {
          date: 'Dec 3',
          type: 'Price Calculation Error',
          severity: 'High',
          description: 'Brief 15-minute period where prices displayed incorrectly for 2.3% of users',
          status: 'Resolved'
        },
        {
          date: 'Dec 6',
          type: 'Revenue Spike',
          severity: 'Low',
          description: 'Unexpected 180% revenue increase coinciding with competitor outage',
          status: 'Investigated'
        },
        {
          date: 'Dec 8',
          type: 'Segment Overlap',
          severity: 'Medium',
          description: 'Some users receiving multiple pricing treatments due to segmentation bug',
          status: 'Resolved'
        }
      ],
      behavioral: [
        {
          behavior: 'Price Comparison Shopping',
          observation: '52% of users view the same product 3+ times before purchasing, often checking prices',
          action: 'Show price stability guarantee or "lowest price" badge'
        },
        {
          behavior: 'Discount Seeking',
          observation: 'Users who see dynamic discounts complete purchase 2.8x faster',
          action: 'Test showing personalized discount countdown timers'
        },
        {
          behavior: 'Bundle Preference',
          observation: 'Bundle deals with dynamic pricing convert 41% better than individual items',
          action: 'Expand bundle offerings and optimize pricing algorithm'
        }
      ]
    }
  },
  "Checkout Flow Redesign": {
    duration: "Nov 15 - Dec 9",
    startDate: "Nov 15",
    endDate: "Dec 9",
    metrics: {
      "Last 7 days": [
        { date: 'Dec 3', conversion: 62, revenue: 18, sessionDuration: 95, bounceRate: 28, cartAbandonment: 13, pageViews: 217 },
        { date: 'Dec 4', conversion: 65, revenue: 19, sessionDuration: 92, bounceRate: 26, cartAbandonment: 24, pageViews: 271 },
        { date: 'Dec 5', conversion: 68, revenue: 21, sessionDuration: 88, bounceRate: 24, cartAbandonment: 28, pageViews: 298 },
        { date: 'Dec 6', conversion: 70, revenue: 22, sessionDuration: 85, bounceRate: 22, cartAbandonment: 25, pageViews: 201 },
        { date: 'Dec 7', conversion: 73, revenue: 24, sessionDuration: 82, bounceRate: 20, cartAbandonment: 15, pageViews: 238 },
        { date: 'Dec 8', conversion: 71, revenue: 23, sessionDuration: 84, bounceRate: 21, cartAbandonment: 30, pageViews: 164 },
        { date: 'Dec 9', conversion: 75, revenue: 25, sessionDuration: 80, bounceRate: 18, cartAbandonment: 26, pageViews: 293 },
      ],
      "Last 14 days": [
        { date: 'Nov 26', conversion: 48, revenue: 15, sessionDuration: 125, bounceRate: 38, cartAbandonment: 30, pageViews: 175 },
        { date: 'Nov 27', conversion: 50, revenue: 15, sessionDuration: 122, bounceRate: 37, cartAbandonment: 12, pageViews: 151 },
        { date: 'Nov 28', conversion: 52, revenue: 16, sessionDuration: 118, bounceRate: 36, cartAbandonment: 15, pageViews: 224 },
        { date: 'Nov 29', conversion: 54, revenue: 16, sessionDuration: 115, bounceRate: 35, cartAbandonment: 20, pageViews: 255 },
        { date: 'Nov 30', conversion: 56, revenue: 17, sessionDuration: 112, bounceRate: 33, cartAbandonment: 17, pageViews: 244 },
        { date: 'Dec 1', conversion: 58, revenue: 17, sessionDuration: 108, bounceRate: 32, cartAbandonment: 30, pageViews: 205 },
        { date: 'Dec 2', conversion: 60, revenue: 18, sessionDuration: 105, bounceRate: 30, cartAbandonment: 26, pageViews: 280 },
        { date: 'Dec 3', conversion: 62, revenue: 18, sessionDuration: 95, bounceRate: 28, cartAbandonment: 26, pageViews: 239 },
        { date: 'Dec 4', conversion: 65, revenue: 19, sessionDuration: 92, bounceRate: 26, cartAbandonment: 13, pageViews: 202 },
        { date: 'Dec 5', conversion: 68, revenue: 21, sessionDuration: 88, bounceRate: 24, cartAbandonment: 27, pageViews: 199 },
        { date: 'Dec 6', conversion: 70, revenue: 22, sessionDuration: 85, bounceRate: 22, cartAbandonment: 21, pageViews: 300 },
        { date: 'Dec 7', conversion: 73, revenue: 24, sessionDuration: 82, bounceRate: 20, cartAbandonment: 28, pageViews: 223 },
        { date: 'Dec 8', conversion: 71, revenue: 23, sessionDuration: 84, bounceRate: 21, cartAbandonment: 29, pageViews: 180 },
        { date: 'Dec 9', conversion: 75, revenue: 25, sessionDuration: 80, bounceRate: 18, cartAbandonment: 15, pageViews: 294 },
      ]
,
      "Last 30 days": [
        { date: 'Nov 10', conversion: 40, revenue: 20, sessionDuration: 120, bounceRate: 48, cartAbandonment: 28, pageViews: 190 },
        { date: 'Nov 11', conversion: 42, revenue: 21, sessionDuration: 122, bounceRate: 47, cartAbandonment: 27, pageViews: 195 },
        { date: 'Nov 12', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 200 },
        { date: 'Nov 13', conversion: 41, revenue: 21, sessionDuration: 123, bounceRate: 47, cartAbandonment: 28, pageViews: 192 },
        { date: 'Nov 14', conversion: 44, revenue: 22, sessionDuration: 126, bounceRate: 46, cartAbandonment: 25, pageViews: 198 },
        { date: 'Nov 15', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 205 },
        { date: 'Nov 16', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 197 },
        { date: 'Nov 17', conversion: 46, revenue: 24, sessionDuration: 130, bounceRate: 44, cartAbandonment: 23, pageViews: 210 },
        { date: 'Nov 18', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 215 },
        { date: 'Nov 19', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 208 },
        { date: 'Nov 20', conversion: 48, revenue: 25, sessionDuration: 134, bounceRate: 42, cartAbandonment: 21, pageViews: 220 },
        { date: 'Nov 21', conversion: 49, revenue: 26, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 225 },
        { date: 'Nov 22', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 218 },
        { date: 'Nov 23', conversion: 50, revenue: 26, sessionDuration: 138, bounceRate: 40, cartAbandonment: 19, pageViews: 230 },
        { date: 'Nov 24', conversion: 51, revenue: 27, sessionDuration: 140, bounceRate: 39, cartAbandonment: 18, pageViews: 235 },
        { date: 'Nov 25', conversion: 49, revenue: 25, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 228 },
        { date: 'Nov 26', conversion: 42, revenue: 18, sessionDuration: 125, bounceRate: 45, cartAbandonment: 27, pageViews: 219 },
        { date: 'Nov 27', conversion: 44, revenue: 19, sessionDuration: 128, bounceRate: 44, cartAbandonment: 11, pageViews: 300 },
        { date: 'Nov 28', conversion: 46, revenue: 20, sessionDuration: 132, bounceRate: 42, cartAbandonment: 27, pageViews: 196 },
        { date: 'Nov 29', conversion: 48, revenue: 21, sessionDuration: 135, bounceRate: 41, cartAbandonment: 16, pageViews: 237 },
        { date: 'Nov 30', conversion: 50, revenue: 22, sessionDuration: 138, bounceRate: 40, cartAbandonment: 21, pageViews: 273 },
        { date: 'Dec 1', conversion: 51, revenue: 23, sessionDuration: 142, bounceRate: 39, cartAbandonment: 16, pageViews: 266 },
        { date: 'Dec 2', conversion: 53, revenue: 24, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 166 },
        { date: 'Dec 3', conversion: 52, revenue: 22, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 175 },
        { date: 'Dec 4', conversion: 48, revenue: 24, sessionDuration: 152, bounceRate: 36, cartAbandonment: 24, pageViews: 212 },
        { date: 'Dec 5', conversion: 55, revenue: 26, sessionDuration: 158, bounceRate: 34, cartAbandonment: 20, pageViews: 232 },
        { date: 'Dec 6', conversion: 58, revenue: 28, sessionDuration: 162, bounceRate: 32, cartAbandonment: 12, pageViews: 276 },
        { date: 'Dec 7', conversion: 62, revenue: 30, sessionDuration: 168, bounceRate: 30, cartAbandonment: 10, pageViews: 187 },
        { date: 'Dec 8', conversion: 60, revenue: 29, sessionDuration: 165, bounceRate: 31, cartAbandonment: 12, pageViews: 226 },
        { date: 'Dec 9', conversion: 65, revenue: 32, sessionDuration: 172, bounceRate: 28, cartAbandonment: 21, pageViews: 224 },
      ]

    },
    events: [
      { icon: "🚀", date: "Dec 1", label: "New flow launched", color: "blue" },
      { icon: "✨", date: "Dec 3", label: "One-click checkout enabled", color: "purple" },
      { icon: "💳", date: "Dec 5", label: "Payment methods expanded", color: "green" },
      { icon: "🎉", date: "Dec 8", label: "Guest checkout optimized", color: "blue" },
    ],
    insights: {
      aiAnalysis: [
        {
          title: 'Friction Reduction Success',
          description: 'Reducing checkout from 5 steps to 3 decreased abandonment by 42%. Average completion time dropped from 4.2min to 1.8min.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 3.4M sessions',
            'Consistent across 3 similar past experiments',
            'Statistically significant at 99%'
          ]
        },
        {
          title: 'Trust Signal Impact',
          description: 'Adding security badges and payment icons increased trust metrics by 35% and conversion by 18%.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 2.8M sessions',
            'Statistically significant at 95%'
          ]
        },
        {
          title: 'Mobile Checkout Optimization',
          description: 'Mobile-specific improvements show 52% higher completion rate. Autofill adoption increased from 28% to 71%.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 1.9M sessions',
            'Consistent across 3 similar past experiments',
            'Statistically significant at 98%'
          ]
        }
      ],
      hypotheses: [
        {
          rank: 1,
          hypothesis: 'Simplified form fields reduce cognitive load',
          likelihood: '94%',
          evidence: 'Completion rate increased 45% after reducing fields from 22 to 8'
        },
        {
          rank: 2,
          hypothesis: 'Progress indicators reduce abandonment anxiety',
          likelihood: '88%',
          evidence: 'Users 3.2x more likely to complete when seeing progress bar'
        },
        {
          rank: 3,
          hypothesis: 'Guest checkout option lowers barrier to entry',
          likelihood: '81%',
          evidence: '38% of first-time purchasers choose guest option over account creation'
        }
      ],
      segments: [
        {
          segment: 'Mobile Users',
          metric: 'Completion Rate',
          change: '+52.3%',
          vs: 'Desktop users (+28.5%)',
          significance: 'High'
        },
        {
          segment: 'First-Time Buyers',
          metric: 'Cart Abandonment',
          change: '-48.7%',
          vs: 'Repeat buyers (-22.1%)',
          significance: 'High'
        },
        {
          segment: 'International Customers',
          metric: 'Checkout Time',
          change: '-38.2%',
          vs: 'Domestic customers (-25.4%)',
          significance: 'Medium'
        }
      ],
      anomalies: [
        {
          date: 'Dec 3',
          type: 'Payment Gateway Issue',
          severity: 'High',
          description: 'One-click checkout failed for 8% of users for 45 minutes during peak hours',
          status: 'Resolved'
        },
        {
          date: 'Dec 5',
          type: 'Form Validation Bug',
          severity: 'Medium',
          description: 'Address autocomplete incorrectly rejected valid addresses for Canadian users',
          status: 'Resolved'
        },
        {
          date: 'Dec 7',
          type: 'Conversion Spike',
          severity: 'Low',
          description: 'Unusual 220% increase in checkout completions during lunch hours',
          status: 'Monitoring'
        }
      ],
      behavioral: [
        {
          behavior: 'Payment Method Preference',
          observation: '67% of users choose first available payment method. Digital wallets used 3.5x more on mobile.',
          action: 'Reorder payment options based on device type and user history'
        },
        {
          behavior: 'Review Before Purchase',
          observation: 'Users who expand order summary spend 28s reviewing before confirming (85% complete)',
          action: 'Make order summary more prominent and easier to review'
        },
        {
          behavior: 'Error Recovery',
          observation: '78% of users abandon after 2+ form errors. Real-time validation reduced errors by 65%.',
          action: 'Enhance inline validation and provide clearer error messaging'
        }
      ]
    }
  },
  "Product Recommendations v2": {
    duration: "Nov 18 - Dec 9",
    startDate: "Nov 18",
    endDate: "Dec 9",
    metrics: {
      "Last 7 days": [
        { date: 'Dec 3', conversion: 48, revenue: 28, sessionDuration: 205, bounceRate: 32, cartAbandonment: 17, pageViews: 198 },
        { date: 'Dec 4', conversion: 51, revenue: 30, sessionDuration: 212, bounceRate: 30, cartAbandonment: 29, pageViews: 247 },
        { date: 'Dec 5', conversion: 54, revenue: 32, sessionDuration: 218, bounceRate: 28, cartAbandonment: 21, pageViews: 290 },
        { date: 'Dec 6', conversion: 57, revenue: 35, sessionDuration: 225, bounceRate: 26, cartAbandonment: 22, pageViews: 232 },
        { date: 'Dec 7', conversion: 60, revenue: 37, sessionDuration: 232, bounceRate: 24, cartAbandonment: 27, pageViews: 279 },
        { date: 'Dec 8', conversion: 58, revenue: 36, sessionDuration: 228, bounceRate: 25, cartAbandonment: 23, pageViews: 155 },
        { date: 'Dec 9', conversion: 62, revenue: 39, sessionDuration: 238, bounceRate: 22, cartAbandonment: 22, pageViews: 265 },
      ],
      "Last 14 days": [
        { date: 'Nov 26', conversion: 38, revenue: 22, sessionDuration: 175, bounceRate: 42, cartAbandonment: 30, pageViews: 167 },
        { date: 'Nov 27', conversion: 40, revenue: 23, sessionDuration: 180, bounceRate: 41, cartAbandonment: 23, pageViews: 204 },
        { date: 'Nov 28', conversion: 41, revenue: 24, sessionDuration: 185, bounceRate: 40, cartAbandonment: 30, pageViews: 287 },
        { date: 'Nov 29', conversion: 43, revenue: 25, sessionDuration: 188, bounceRate: 39, cartAbandonment: 20, pageViews: 245 },
        { date: 'Nov 30', conversion: 44, revenue: 26, sessionDuration: 192, bounceRate: 38, cartAbandonment: 12, pageViews: 237 },
        { date: 'Dec 1', conversion: 45, revenue: 27, sessionDuration: 195, bounceRate: 36, cartAbandonment: 27, pageViews: 277 },
        { date: 'Dec 2', conversion: 47, revenue: 28, sessionDuration: 200, bounceRate: 34, cartAbandonment: 27, pageViews: 210 },
        { date: 'Dec 3', conversion: 48, revenue: 28, sessionDuration: 205, bounceRate: 32, cartAbandonment: 14, pageViews: 262 },
        { date: 'Dec 4', conversion: 51, revenue: 30, sessionDuration: 212, bounceRate: 30, cartAbandonment: 10, pageViews: 217 },
        { date: 'Dec 5', conversion: 54, revenue: 32, sessionDuration: 218, bounceRate: 28, cartAbandonment: 12, pageViews: 179 },
        { date: 'Dec 6', conversion: 57, revenue: 35, sessionDuration: 225, bounceRate: 26, cartAbandonment: 21, pageViews: 293 },
        { date: 'Dec 7', conversion: 60, revenue: 37, sessionDuration: 232, bounceRate: 24, cartAbandonment: 22, pageViews: 160 },
        { date: 'Dec 8', conversion: 58, revenue: 36, sessionDuration: 228, bounceRate: 25, cartAbandonment: 19, pageViews: 271 },
        { date: 'Dec 9', conversion: 62, revenue: 39, sessionDuration: 238, bounceRate: 22, cartAbandonment: 15, pageViews: 187 },
      ]
,
      "Last 30 days": [
        { date: 'Nov 10', conversion: 40, revenue: 20, sessionDuration: 120, bounceRate: 48, cartAbandonment: 28, pageViews: 190 },
        { date: 'Nov 11', conversion: 42, revenue: 21, sessionDuration: 122, bounceRate: 47, cartAbandonment: 27, pageViews: 195 },
        { date: 'Nov 12', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 200 },
        { date: 'Nov 13', conversion: 41, revenue: 21, sessionDuration: 123, bounceRate: 47, cartAbandonment: 28, pageViews: 192 },
        { date: 'Nov 14', conversion: 44, revenue: 22, sessionDuration: 126, bounceRate: 46, cartAbandonment: 25, pageViews: 198 },
        { date: 'Nov 15', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 205 },
        { date: 'Nov 16', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 197 },
        { date: 'Nov 17', conversion: 46, revenue: 24, sessionDuration: 130, bounceRate: 44, cartAbandonment: 23, pageViews: 210 },
        { date: 'Nov 18', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 215 },
        { date: 'Nov 19', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 208 },
        { date: 'Nov 20', conversion: 48, revenue: 25, sessionDuration: 134, bounceRate: 42, cartAbandonment: 21, pageViews: 220 },
        { date: 'Nov 21', conversion: 49, revenue: 26, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 225 },
        { date: 'Nov 22', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 218 },
        { date: 'Nov 23', conversion: 50, revenue: 26, sessionDuration: 138, bounceRate: 40, cartAbandonment: 19, pageViews: 230 },
        { date: 'Nov 24', conversion: 51, revenue: 27, sessionDuration: 140, bounceRate: 39, cartAbandonment: 18, pageViews: 235 },
        { date: 'Nov 25', conversion: 49, revenue: 25, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 228 },
        { date: 'Nov 26', conversion: 42, revenue: 18, sessionDuration: 125, bounceRate: 45, cartAbandonment: 27, pageViews: 219 },
        { date: 'Nov 27', conversion: 44, revenue: 19, sessionDuration: 128, bounceRate: 44, cartAbandonment: 11, pageViews: 300 },
        { date: 'Nov 28', conversion: 46, revenue: 20, sessionDuration: 132, bounceRate: 42, cartAbandonment: 27, pageViews: 196 },
        { date: 'Nov 29', conversion: 48, revenue: 21, sessionDuration: 135, bounceRate: 41, cartAbandonment: 16, pageViews: 237 },
        { date: 'Nov 30', conversion: 50, revenue: 22, sessionDuration: 138, bounceRate: 40, cartAbandonment: 21, pageViews: 273 },
        { date: 'Dec 1', conversion: 51, revenue: 23, sessionDuration: 142, bounceRate: 39, cartAbandonment: 16, pageViews: 266 },
        { date: 'Dec 2', conversion: 53, revenue: 24, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 166 },
        { date: 'Dec 3', conversion: 52, revenue: 22, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 175 },
        { date: 'Dec 4', conversion: 48, revenue: 24, sessionDuration: 152, bounceRate: 36, cartAbandonment: 24, pageViews: 212 },
        { date: 'Dec 5', conversion: 55, revenue: 26, sessionDuration: 158, bounceRate: 34, cartAbandonment: 20, pageViews: 232 },
        { date: 'Dec 6', conversion: 58, revenue: 28, sessionDuration: 162, bounceRate: 32, cartAbandonment: 12, pageViews: 276 },
        { date: 'Dec 7', conversion: 62, revenue: 30, sessionDuration: 168, bounceRate: 30, cartAbandonment: 10, pageViews: 187 },
        { date: 'Dec 8', conversion: 60, revenue: 29, sessionDuration: 165, bounceRate: 31, cartAbandonment: 12, pageViews: 226 },
        { date: 'Dec 9', conversion: 65, revenue: 32, sessionDuration: 172, bounceRate: 28, cartAbandonment: 21, pageViews: 224 },
      ]

    },
    events: [
      { icon: "🚀", date: "Dec 1", label: "ML model v2 deployed", color: "blue" },
      { icon: "🤖", date: "Dec 4", label: "Personalization enabled", color: "purple" },
      { icon: "📈", date: "Dec 6", label: "Click-through spike", color: "green" },
      { icon: "🎯", date: "Dec 8", label: "Collaborative filtering added", color: "blue" },
    ],
    insights: {
      aiAnalysis: [
        {
          title: 'Personalization Effectiveness',
          description: 'ML-powered recommendations show 3.2x higher click-through rate vs rule-based system. Conversion lift of 38%.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 4.7M sessions',
            'Consistent across 3 similar past experiments',
            'Statistically significant at 99%'
          ]
        },
        {
          title: 'Cross-sell Opportunity',
          description: 'Recommended products increase average order value by $24.50. Bundle recommendations perform 2.8x better.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 3.2M sessions',
            'Statistically significant at 96%'
          ]
        },
        {
          title: 'Engagement Pattern',
          description: 'Users who interact with recommendations have 4.5x longer session duration and view 6.2 more products.',
          confidence: 'Medium',
          impact: 'Positive',
          evidenceTags: [
            'Based on 1.5M sessions',
            'Statistically significant at 92%'
          ]
        }
      ],
      hypotheses: [
        {
          rank: 1,
          hypothesis: 'Collaborative filtering improves product discovery',
          likelihood: '91%',
          evidence: 'Users find relevant products 58% faster, add 2.3x more items to cart'
        },
        {
          rank: 2,
          hypothesis: 'Real-time personalization increases engagement',
          likelihood: '86%',
          evidence: 'Session duration up 65%, page views per session increased from 4.2 to 9.8'
        },
        {
          rank: 3,
          hypothesis: 'Visual similarity drives impulse purchases',
          likelihood: '79%',
          evidence: 'Image-based recommendations have 42% higher add-to-cart rate'
        }
      ],
      segments: [
        {
          segment: 'Returning Customers',
          metric: 'Recommendation CTR',
          change: '+58.2%',
          vs: 'New customers (+32.5%)',
          significance: 'High'
        },
        {
          segment: 'Mobile Users',
          metric: 'Products Viewed',
          change: '+72.8%',
          vs: 'Desktop users (+45.3%)',
          significance: 'High'
        },
        {
          segment: 'High-Intent Browsers',
          metric: 'Average Order Value',
          change: '+41.5%',
          vs: 'Casual browsers (+18.2%)',
          significance: 'Medium'
        }
      ],
      anomalies: [
        {
          date: 'Dec 4',
          type: 'Model Performance',
          severity: 'Medium',
          description: 'Recommendation relevance score dropped 12% for 90 minutes after model update',
          status: 'Resolved'
        },
        {
          date: 'Dec 6',
          type: 'Click Surge',
          severity: 'Low',
          description: 'Unusual 280% increase in recommendation clicks during evening hours',
          status: 'Investigated'
        },
        {
          date: 'Dec 8',
          type: 'Cold Start Issue',
          severity: 'Medium',
          description: 'New users receiving generic recommendations due to insufficient data',
          status: 'Monitoring'
        }
      ],
      behavioral: [
        {
          behavior: 'Recommendation Position',
          observation: 'First 3 recommendations get 82% of all clicks. Items beyond position 6 rarely clicked.',
          action: 'Focus quality on top positions, consider reducing total recommendations shown'
        },
        {
          behavior: 'Category Exploration',
          observation: 'Users click cross-category recommendations 2.4x more than same-category',
          action: 'Increase diversity in recommendation algorithm to encourage exploration'
        },
        {
          behavior: 'Price Sensitivity',
          observation: 'Recommendations within ±30% of viewed item price convert 3.1x better',
          action: 'Add price range filtering to recommendation algorithm'
        }
      ]
    }
  },
  "Payment Options Expansion": {
    duration: "Nov 22 - Dec 9",
    startDate: "Nov 22",
    endDate: "Dec 9",
    metrics: {
      "Last 7 days": [
        { date: 'Dec 3', conversion: 55, revenue: 24, sessionDuration: 142, bounceRate: 35, cartAbandonment: 22, pageViews: 207 },
        { date: 'Dec 4', conversion: 58, revenue: 26, sessionDuration: 145, bounceRate: 33, cartAbandonment: 11, pageViews: 165 },
        { date: 'Dec 5', conversion: 61, revenue: 28, sessionDuration: 148, bounceRate: 31, cartAbandonment: 12, pageViews: 168 },
        { date: 'Dec 6', conversion: 64, revenue: 30, sessionDuration: 152, bounceRate: 29, cartAbandonment: 29, pageViews: 216 },
        { date: 'Dec 7', conversion: 67, revenue: 32, sessionDuration: 155, bounceRate: 27, cartAbandonment: 30, pageViews: 199 },
        { date: 'Dec 8', conversion: 65, revenue: 31, sessionDuration: 153, bounceRate: 28, cartAbandonment: 15, pageViews: 278 },
        { date: 'Dec 9', conversion: 69, revenue: 34, sessionDuration: 158, bounceRate: 25, cartAbandonment: 10, pageViews: 163 },
      ],
      "Last 14 days": [
        { date: 'Nov 26', conversion: 42, revenue: 19, sessionDuration: 125, bounceRate: 45, cartAbandonment: 13, pageViews: 229 },
        { date: 'Nov 27', conversion: 44, revenue: 20, sessionDuration: 128, bounceRate: 44, cartAbandonment: 20, pageViews: 230 },
        { date: 'Nov 28', conversion: 46, revenue: 21, sessionDuration: 131, bounceRate: 43, cartAbandonment: 27, pageViews: 232 },
        { date: 'Nov 29', conversion: 48, revenue: 22, sessionDuration: 134, bounceRate: 42, cartAbandonment: 25, pageViews: 204 },
        { date: 'Nov 30', conversion: 50, revenue: 22, sessionDuration: 136, bounceRate: 40, cartAbandonment: 27, pageViews: 157 },
        { date: 'Dec 1', conversion: 52, revenue: 23, sessionDuration: 138, bounceRate: 38, cartAbandonment: 25, pageViews: 203 },
        { date: 'Dec 2', conversion: 54, revenue: 24, sessionDuration: 140, bounceRate: 36, cartAbandonment: 25, pageViews: 150 },
        { date: 'Dec 3', conversion: 55, revenue: 24, sessionDuration: 142, bounceRate: 35, cartAbandonment: 11, pageViews: 270 },
        { date: 'Dec 4', conversion: 58, revenue: 26, sessionDuration: 145, bounceRate: 33, cartAbandonment: 23, pageViews: 174 },
        { date: 'Dec 5', conversion: 61, revenue: 28, sessionDuration: 148, bounceRate: 31, cartAbandonment: 16, pageViews: 247 },
        { date: 'Dec 6', conversion: 64, revenue: 30, sessionDuration: 152, bounceRate: 29, cartAbandonment: 21, pageViews: 280 },
        { date: 'Dec 7', conversion: 67, revenue: 32, sessionDuration: 155, bounceRate: 27, cartAbandonment: 22, pageViews: 275 },
        { date: 'Dec 8', conversion: 65, revenue: 31, sessionDuration: 153, bounceRate: 28, cartAbandonment: 24, pageViews: 259 },
        { date: 'Dec 9', conversion: 69, revenue: 34, sessionDuration: 158, bounceRate: 25, cartAbandonment: 21, pageViews: 168 },
      ]
,
      "Last 30 days": [
        { date: 'Nov 10', conversion: 40, revenue: 20, sessionDuration: 120, bounceRate: 48, cartAbandonment: 28, pageViews: 190 },
        { date: 'Nov 11', conversion: 42, revenue: 21, sessionDuration: 122, bounceRate: 47, cartAbandonment: 27, pageViews: 195 },
        { date: 'Nov 12', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 200 },
        { date: 'Nov 13', conversion: 41, revenue: 21, sessionDuration: 123, bounceRate: 47, cartAbandonment: 28, pageViews: 192 },
        { date: 'Nov 14', conversion: 44, revenue: 22, sessionDuration: 126, bounceRate: 46, cartAbandonment: 25, pageViews: 198 },
        { date: 'Nov 15', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 205 },
        { date: 'Nov 16', conversion: 43, revenue: 22, sessionDuration: 125, bounceRate: 46, cartAbandonment: 26, pageViews: 197 },
        { date: 'Nov 17', conversion: 46, revenue: 24, sessionDuration: 130, bounceRate: 44, cartAbandonment: 23, pageViews: 210 },
        { date: 'Nov 18', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 215 },
        { date: 'Nov 19', conversion: 45, revenue: 23, sessionDuration: 128, bounceRate: 45, cartAbandonment: 24, pageViews: 208 },
        { date: 'Nov 20', conversion: 48, revenue: 25, sessionDuration: 134, bounceRate: 42, cartAbandonment: 21, pageViews: 220 },
        { date: 'Nov 21', conversion: 49, revenue: 26, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 225 },
        { date: 'Nov 22', conversion: 47, revenue: 24, sessionDuration: 132, bounceRate: 43, cartAbandonment: 22, pageViews: 218 },
        { date: 'Nov 23', conversion: 50, revenue: 26, sessionDuration: 138, bounceRate: 40, cartAbandonment: 19, pageViews: 230 },
        { date: 'Nov 24', conversion: 51, revenue: 27, sessionDuration: 140, bounceRate: 39, cartAbandonment: 18, pageViews: 235 },
        { date: 'Nov 25', conversion: 49, revenue: 25, sessionDuration: 136, bounceRate: 41, cartAbandonment: 20, pageViews: 228 },
        { date: 'Nov 26', conversion: 42, revenue: 18, sessionDuration: 125, bounceRate: 45, cartAbandonment: 27, pageViews: 219 },
        { date: 'Nov 27', conversion: 44, revenue: 19, sessionDuration: 128, bounceRate: 44, cartAbandonment: 11, pageViews: 300 },
        { date: 'Nov 28', conversion: 46, revenue: 20, sessionDuration: 132, bounceRate: 42, cartAbandonment: 27, pageViews: 196 },
        { date: 'Nov 29', conversion: 48, revenue: 21, sessionDuration: 135, bounceRate: 41, cartAbandonment: 16, pageViews: 237 },
        { date: 'Nov 30', conversion: 50, revenue: 22, sessionDuration: 138, bounceRate: 40, cartAbandonment: 21, pageViews: 273 },
        { date: 'Dec 1', conversion: 51, revenue: 23, sessionDuration: 142, bounceRate: 39, cartAbandonment: 16, pageViews: 266 },
        { date: 'Dec 2', conversion: 53, revenue: 24, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 166 },
        { date: 'Dec 3', conversion: 52, revenue: 22, sessionDuration: 145, bounceRate: 38, cartAbandonment: 16, pageViews: 175 },
        { date: 'Dec 4', conversion: 48, revenue: 24, sessionDuration: 152, bounceRate: 36, cartAbandonment: 24, pageViews: 212 },
        { date: 'Dec 5', conversion: 55, revenue: 26, sessionDuration: 158, bounceRate: 34, cartAbandonment: 20, pageViews: 232 },
        { date: 'Dec 6', conversion: 58, revenue: 28, sessionDuration: 162, bounceRate: 32, cartAbandonment: 12, pageViews: 276 },
        { date: 'Dec 7', conversion: 62, revenue: 30, sessionDuration: 168, bounceRate: 30, cartAbandonment: 10, pageViews: 187 },
        { date: 'Dec 8', conversion: 60, revenue: 29, sessionDuration: 165, bounceRate: 31, cartAbandonment: 12, pageViews: 226 },
        { date: 'Dec 9', conversion: 65, revenue: 32, sessionDuration: 172, bounceRate: 28, cartAbandonment: 21, pageViews: 224 },
      ]

    },
    events: [
      { icon: "🚀", date: "Dec 1", label: "BNPL launched", color: "blue" },
      { icon: "💳", date: "Dec 3", label: "Apple Pay added", color: "purple" },
      { icon: "📱", date: "Dec 5", label: "Google Pay integrated", color: "green" },
      { icon: "🌐", date: "Dec 7", label: "Crypto payments beta", color: "blue" },
    ],
    insights: {
      aiAnalysis: [
        {
          title: 'Buy Now Pay Later Impact',
          description: 'BNPL options increased conversion by 28% for orders >$150. Average order value up 22% with flexible payment.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 2.6M sessions',
            'Consistent across 3 similar past experiments',
            'Statistically significant at 97%'
          ]
        },
        {
          title: 'Digital Wallet Adoption',
          description: 'Apple Pay and Google Pay account for 42% of mobile transactions. Checkout time reduced by 35 seconds.',
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: [
            'Based on 3.1M sessions',
            'Statistically significant at 95%'
          ]
        },
        {
          title: 'Payment Method Diversity',
          description: 'Offering 5+ payment options reduced abandonment by 31%. Each additional method adds ~4% conversion lift.',
          confidence: 'Medium',
          impact: 'Positive',
          evidenceTags: [
            'Based on 890K sessions',
            'Statistically significant at 88%'
          ]
        }
      ],
      hypotheses: [
        {
          rank: 1,
          hypothesis: 'BNPL removes purchase hesitation for big-ticket items',
          likelihood: '90%',
          evidence: 'Conversion for $150+ orders increased 38%, cart abandonment down 45%'
        },
        {
          rank: 2,
          hypothesis: 'Digital wallets reduce friction on mobile',
          likelihood: '87%',
          evidence: 'Mobile checkout completion up 52%, time-to-purchase down 40%'
        },
        {
          rank: 3,
          hypothesis: 'Payment diversity builds trust and inclusivity',
          likelihood: '82%',
          evidence: 'Customer satisfaction scores up 18%, international conversion up 34%'
        }
      ],
      segments: [
        {
          segment: 'Millennial/Gen Z',
          metric: 'BNPL Usage',
          change: '+68.5%',
          vs: 'Gen X/Boomer (+15.2%)',
          significance: 'High'
        },
        {
          segment: 'Mobile Shoppers',
          metric: 'Digital Wallet Usage',
          change: '+82.3%',
          vs: 'Desktop shoppers (+12.8%)',
          significance: 'High'
        },
        {
          segment: 'High-Value Orders',
          metric: 'Conversion Rate',
          change: '+38.7%',
          vs: 'Low-value orders (+18.4%)',
          significance: 'Medium'
        }
      ],
      anomalies: [
        {
          date: 'Dec 3',
          type: 'Apple Pay Outage',
          severity: 'High',
          description: 'Apple Pay unavailable for 2 hours affecting 18% of mobile transactions',
          status: 'Resolved'
        },
        {
          date: 'Dec 5',
          type: 'BNPL Approval Rate',
          severity: 'Medium',
          description: 'Unusually low approval rate (62% vs typical 85%) for BNPL applications',
          status: 'Investigated'
        },
        {
          date: 'Dec 7',
          type: 'Payment Fraud Spike',
          severity: 'High',
          description: 'Increased fraud attempts on new payment methods, blocked $12K in fraudulent transactions',
          status: 'Monitoring'
        }
      ],
      behavioral: [
        {
          behavior: 'Payment Method Exploration',
          observation: '34% of users tap through all available payment options before selecting one',
          action: 'Add saved payment preference and recommended method based on profile'
        },
        {
          behavior: 'BNPL Terms Review',
          observation: 'Users spend average 45s reviewing BNPL terms, 88% complete after reading',
          action: 'Simplify terms presentation and add visual payment schedule'
        },
        {
          behavior: 'Trust Indicators',
          observation: 'Security badges near payment options increase completion by 23%',
          action: 'Add more trust signals and payment security certifications'
        }
      ]
    }
  }
};

const insightCategories = [
  { id: 'aiAnalysis', name: 'AI Analysis' },
  { id: 'anomalies', name: 'Anomalies Detected' },
  { id: 'hypotheses', name: 'Ranked Hypotheses' },
  { id: 'segments', name: 'Segment Differences' },
  { id: 'behavioral', name: 'Behavioral Insights' },
];

export default function ChangeIntelligence() {
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [comparisonSegment, setComparisonSegment] = useState(null);
  const [selectedQualitative, setSelectedQualitative] = useState([]);
  const [analysisRun, setAnalysisRun] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState('graph');
  const [expandedInsight, setExpandedInsight] = useState(null);
  const [currentData, setCurrentData] = useState({ metrics: [], events: [], insights: {} });
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  const [showDrilldownModal, setShowDrilldownModal] = useState(false);
  const [drilldownData, setDrilldownData] = useState(null);
  const [showHypothesisModal, setShowHypothesisModal] = useState(false);
  const [hypothesisDetailData, setHypothesisDetailData] = useState(null);
  const [selectedSessionReplay, setSelectedSessionReplay] = useState(null);
  const [showSegmentModal, setShowSegmentModal] = useState(false);
  const [segmentDetailData, setSegmentDetailData] = useState(null);
  const [showAnomalyModal, setShowAnomalyModal] = useState(false);
  const [anomalyDetailData, setAnomalyDetailData] = useState(null);
  const [showBehavioralModal, setShowBehavioralModal] = useState(false);
  const [behavioralDetailData, setBehavioralDetailData] = useState(null);
  const [showAIAnalysisModal, setShowAIAnalysisModal] = useState(false);
  const [aiAnalysisDetailData, setAIAnalysisDetailData] = useState(null);

  const toggleMetric = (metric) => {
    if (selectedMetrics.includes(metric)) {
      setSelectedMetrics(selectedMetrics.filter(m => m !== metric));
    } else {
      setSelectedMetrics([...selectedMetrics, metric]);
    }
  };

  const toggleQualitative = (qual) => {
    if (selectedQualitative.includes(qual)) {
      setSelectedQualitative(selectedQualitative.filter(q => q !== qual));
    } else {
      setSelectedQualitative([...selectedQualitative, qual]);
    }
  };

  const handleRunAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      updateData();
      setAnalysisRun(true);
      setLoading(false);
    }, 1500);
  };

  const updateData = () => {
    if (selectedExperiment && selectedDateRange) {
      const expData = experimentData[selectedExperiment.name];
      if (expData) {
        let metricsToShow = [];
        
        if (selectedDateRange === "Experiment duration") {
          // Generate date range based on experiment's actual duration
          metricsToShow = generateDateRangeData(expData.startDate, expData.endDate, expData.metrics["Last 14 days"]);
        } else if (selectedDateRange === "Custom" && customStartDate && customEndDate) {
          // Generate custom date range
          metricsToShow = generateCustomDateRangeData(customStartDate, customEndDate, expData.metrics["Last 14 days"]);
        } else {
          // Use predefined ranges
          metricsToShow = expData.metrics[selectedDateRange] || expData.metrics["Last 7 days"];
        }
        
        // Apply segment-specific multipliers to the data
        if (selectedSegment && selectedSegment !== "All Customers") {
          metricsToShow = applySegmentMultipliers(metricsToShow, selectedSegment);
        }
        
        // Customize insights based on segment and metrics
        const customizedInsights = customizeInsights(expData.insights, selectedSegment, selectedMetrics, selectedDateRange, selectedSessionReplay, comparisonSegment);
        
        // Generate dynamic events based on date range and metrics
        const dynamicEvents = generateDynamicEvents(selectedDateRange, selectedMetrics, selectedSegment, selectedExperiment);
        
        setCurrentData({
          metrics: metricsToShow,
          events: dynamicEvents,
          insights: customizedInsights,
          comparisonSegment: comparisonSegment
        });
      }
    }
  };
  
  const customizeInsights = (baseInsights, segment, metrics, dateRange, sessionReplay, comparisonSegment) => {
    const customized = {};
    
    // Generate completely dynamic AI Analysis based on segment and metrics
    const primaryMetric = metrics && metrics[0] ? metrics[0] : 'Conversion Rate';
    const segmentName = segment || 'All Customers';
    
    customized.aiAnalysis = generateDynamicAIAnalysis(primaryMetric, segmentName, dateRange, comparisonSegment);
    customized.hypotheses = generateDynamicHypotheses(metrics, segmentName);
    customized.segments = generateDynamicSegments(segmentName, metrics, comparisonSegment);
    customized.anomalies = generateDynamicAnomalies(dateRange, metrics);
    customized.behavioral = generateDynamicBehavioral(metrics, segmentName, sessionReplay);
    
    return customized;
  };
  
  const generateDynamicAIAnalysis = (metric, segment, dateRange, comparisonSegment) => {
    // Generate comparison suffix for descriptions when comparison is active
    const getComparisonText = (baseText) => {
      if (!comparisonSegment) return baseText;
      
      const comparisonDiffs = {
        'Power Users': { conversion: '+42%', revenue: '+85%', engagement: '+67%' },
        'New Customers': { conversion: '-18%', revenue: '-30%', engagement: '-12%' },
        'Returning Customers': { conversion: '+12%', revenue: '+28%', engagement: '+15%' },
        'At Risk': { conversion: '-35%', revenue: '-48%', engagement: '-52%' },
        'All Customers': { conversion: '±0%', revenue: '±0%', engagement: '±0%' }
      };
      
      const diff = comparisonDiffs[comparisonSegment] || { conversion: '±0%', revenue: '±0%', engagement: '±0%' };
      const metricDiff = metric.includes('Conversion') ? diff.conversion : 
                        metric.includes('Revenue') ? diff.revenue : diff.engagement;
      
      return `${baseText} When compared to ${comparisonSegment}, this segment shows ${metricDiff} difference in performance.`;
    };
    
    const analyses = {
      'Conversion Rate': [
        {
          title: `${segment} Conversion Pattern${comparisonSegment ? ` vs ${comparisonSegment}` : ''}`,
          description: getComparisonText(`${segment} show ${segment === 'Power Users' ? 'exceptional' : segment === 'New Customers' ? 'developing' : 'strong'} conversion behavior with ${segment === 'At Risk' ? 'declining' : 'increasing'} purchase completion rates during ${dateRange}.`),
          confidence: segment === 'Power Users' ? 'High' : 'High',
          impact: segment === 'At Risk' ? 'Negative' : 'Positive',
          evidenceTags: [
            'Based on 1.2M sessions',
            comparisonSegment ? `Compared against ${comparisonSegment}` : 'Statistically significant at 95%'
          ].filter(Boolean)
        },
        {
          title: `Conversion Optimization for ${segment}`,
          description: `Analysis shows ${segment.toLowerCase()} respond ${segment === 'New Customers' ? 'better to trust signals' : segment === 'Power Users' ? 'to personalized experiences' : 'to clear value propositions'}.`,
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: ['Based on 850K sessions', 'Statistically significant at 92%']
        }
      ],
      'Revenue per User': [
        {
          title: `${segment} Revenue Impact${comparisonSegment ? ` vs ${comparisonSegment}` : ''}`,
          description: getComparisonText(`${segment} generate ${segment === 'Power Users' ? 'significantly higher' : segment === 'At Risk' ? 'lower' : 'moderate'} revenue per transaction, averaging ${segment === 'Power Users' ? '+80%' : segment === 'New Customers' ? '-25%' : '+15%'} vs baseline.`),
          confidence: 'High',
          impact: segment === 'At Risk' ? 'Neutral' : 'Positive',
          evidenceTags: [
            'Based on 2.1M sessions',
            comparisonSegment ? `Compared against ${comparisonSegment}` : 'Statistically significant at 97%'
          ].filter(Boolean)
        },
        {
          title: `Monetization Strategy for ${segment}`,
          description: `Revenue optimization shows ${segment.toLowerCase()} are ${segment === 'Power Users' ? 'price-insensitive and value premium features' : segment === 'New Customers' ? 'price-conscious but open to trials' : 'responsive to bundled offers'}.`,
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: ['Based on 1.8M sessions', 'Statistically significant at 94%']
        }
      ],
      'Session Duration': [
        {
          title: `${segment} Engagement Analysis${comparisonSegment ? ` vs ${comparisonSegment}` : ''}`,
          description: getComparisonText(`${segment} spend ${segment === 'Power Users' ? 'significantly more time' : segment === 'At Risk' ? 'minimal time' : 'moderate time'} on platform during ${dateRange}, indicating ${segment === 'At Risk' ? 'disengagement' : 'strong interest'}.`),
          confidence: 'High',
          impact: segment === 'At Risk' ? 'Negative' : 'Positive',
          evidenceTags: [
            'Based on 1.5M sessions',
            comparisonSegment ? `Compared against ${comparisonSegment}` : 'Statistically significant at 93%'
          ].filter(Boolean)
        },
        {
          title: `Content Optimization for ${segment}`,
          description: `Session data reveals ${segment.toLowerCase()} engage most with ${segment === 'Power Users' ? 'advanced features and customization' : segment === 'New Customers' ? 'onboarding and tutorials' : 'core product features'}.`,
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: ['Based on 920K sessions', 'Statistically significant at 91%']
        }
      ],
      'Bounce Rate': [
        {
          title: `${segment} Retention Challenge${comparisonSegment ? ` vs ${comparisonSegment}` : ''}`,
          description: getComparisonText(`${segment} show ${segment === 'At Risk' ? 'elevated' : segment === 'Power Users' ? 'minimal' : 'standard'} bounce rates, suggesting ${segment === 'At Risk' ? 'need for re-engagement' : 'effective landing experiences'}.`),
          confidence: 'High',
          impact: segment === 'At Risk' ? 'Negative' : 'Positive',
          evidenceTags: [
            'Based on 1.1M sessions',
            comparisonSegment ? `Compared against ${comparisonSegment}` : 'Statistically significant at 89%'
          ].filter(Boolean)
        },
        {
          title: `First Impression for ${segment}`,
          description: `Landing page analysis shows ${segment.toLowerCase()} ${segment === 'New Customers' ? 'need clearer value propositions' : segment === 'Power Users' ? 'bypass intro content' : 'engage with hero messaging'}.`,
          confidence: 'Medium',
          impact: 'Neutral',
          evidenceTags: ['Based on 650K sessions', 'Statistically significant at 85%']
        }
      ],
      'Cart Abandonment': [
        {
          title: `${segment} Purchase Friction${comparisonSegment ? ` vs ${comparisonSegment}` : ''}`,
          description: getComparisonText(`${segment} abandon carts at ${segment === 'At Risk' ? 'very high' : segment === 'Power Users' ? 'very low' : 'moderate'} rates, primarily due to ${segment === 'New Customers' ? 'hesitation and lack of trust' : 'pricing concerns'}.`),
          confidence: 'High',
          impact: segment === 'Power Users' ? 'Positive' : 'Negative',
          evidenceTags: [
            'Based on 3.4M sessions',
            comparisonSegment ? `Compared against ${comparisonSegment}` : 'Statistically significant at 99%'
          ].filter(Boolean)
        },
        {
          title: `Checkout Optimization for ${segment}`,
          description: `Recovery strategies show ${segment.toLowerCase()} respond to ${segment === 'New Customers' ? 'security badges and guarantees' : segment === 'Power Users' ? 'express checkout options' : 'limited-time incentives'}.`,
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: ['Based on 2.8M sessions', 'Statistically significant at 96%']
        }
      ],
      'Page Views': [
        {
          title: `${segment} Browse Behavior${comparisonSegment ? ` vs ${comparisonSegment}` : ''}`,
          description: getComparisonText(`${segment} view ${segment === 'Power Users' ? '60% more pages' : segment === 'At Risk' ? '25% fewer pages' : 'similar page counts'} compared to average, indicating ${segment === 'Power Users' ? 'deep exploration' : segment === 'At Risk' ? 'quick exit intent' : 'normal discovery'}.`),
          confidence: 'High',
          impact: segment === 'At Risk' ? 'Negative' : 'Positive',
          evidenceTags: [
            'Based on 1.9M sessions',
            comparisonSegment ? `Compared against ${comparisonSegment}` : 'Statistically significant at 94%'
          ].filter(Boolean)
        },
        {
          title: `Navigation Patterns for ${segment}`,
          description: `Page flow analysis reveals ${segment.toLowerCase()} prefer ${segment === 'Power Users' ? 'direct navigation to advanced features' : segment === 'New Customers' ? 'guided browsing with clear CTAs' : 'search and category browsing'}.`,
          confidence: 'High',
          impact: 'Positive',
          evidenceTags: ['Based on 1.3M sessions', 'Statistically significant at 90%']
        }
      ]
    };
    
    return analyses[metric] || analyses['Conversion Rate'];
  };
  
  const generateDynamicHypotheses = (metrics, segment) => {
    const metricFocus = metrics && metrics[0] ? metrics[0] : 'Conversion Rate';
    
    return [
      {
        rank: 1,
        hypothesis: `${segment} ${metricFocus.toLowerCase()} driven by personalized experience`,
        likelihood: segment === 'Power Users' ? '94%' : segment === 'New Customers' ? '78%' : '85%',
        evidence: `${segment} show ${segment === 'Power Users' ? '45%' : '22%'} better ${metricFocus.toLowerCase()} with customization`
      },
      {
        rank: 2,
        hypothesis: `${segment} respond to ${metrics && metrics[1] ? metrics[1].toLowerCase() : 'session duration'} improvements`,
        likelihood: '82%',
        evidence: `${segment === 'At Risk' ? 'Re-engagement' : 'Enhanced'} features increased ${metrics && metrics[1] ? metrics[1] : 'engagement'} by 31%`
      },
      {
        rank: 3,
        hypothesis: `${segment} value proposition impacts ${metricFocus}`,
        likelihood: '76%',
        evidence: `Testing shows ${segment.toLowerCase()} ${segment === 'New Customers' ? 'need social proof' : 'value speed and efficiency'}`
      }
    ];
  };
  
  const generateDynamicSegments = (currentSegment, metrics, comparisonSegment) => {
    const otherSegments = ['New Customers', 'Returning Customers', 'Power Users', 'At Risk'].filter(s => s !== currentSegment);
    const primaryMetric = metrics && metrics[0] ? metrics[0] : 'Conversion Rate';
    
    // If comparison segment is selected, prioritize it in the list
    let segmentsToShow = otherSegments.slice(0, 3);
    if (comparisonSegment && !segmentsToShow.includes(comparisonSegment)) {
      segmentsToShow = [comparisonSegment, ...segmentsToShow.filter(s => s !== comparisonSegment).slice(0, 2)];
    } else if (comparisonSegment) {
      segmentsToShow = [comparisonSegment, ...segmentsToShow.filter(s => s !== comparisonSegment)];
    }
    
    return segmentsToShow.map(seg => ({
      segment: seg,
      metric: primaryMetric,
      change: seg === 'Power Users' ? '+45%' : seg === 'At Risk' ? '-40%' : seg === 'New Customers' ? '-15%' : '+25%',
      vs: `${currentSegment} baseline`,
      significance: seg === 'Power Users' || seg === 'At Risk' ? 'High' : 'Medium',
      isComparison: seg === comparisonSegment
    }));
  };
  
  const generateDynamicAnomalies = (dateRange, metrics) => {
    const period = dateRange || 'Last 7 days';
    const metricContext = metrics && metrics[0] ? metrics[0] : 'overall performance';
    
    return [
      {
        date: 'Dec 5',
        type: `${metricContext} Spike`,
        severity: 'Medium',
        description: `Unusual ${metricContext.toLowerCase()} pattern detected during ${period} - investigating correlation with external factors`,
        status: 'Monitoring'
      },
      {
        date: 'Dec 7',
        type: 'System Performance',
        severity: 'Low',
        description: `Brief latency affecting ${metricContext.toLowerCase()} measurement accuracy during ${period}`,
        status: 'Resolved'
      }
    ];
  };
  
  const generateDynamicBehavioral = (metrics, segment, sessionReplay) => {
    if (!sessionReplay) {
      // If no session replay selected, return empty array to hide the section
      return [];
    }
    
    const focusMetric = metrics && metrics[0] ? metrics[0] : 'Conversion Rate';
    
    return [
      {
        type: 'Session replays',
        count: '47 sessions',
        behavior: segment === 'Power Users' 
          ? `Users in Variant B frequently accessed advanced settings menu`
          : segment === 'New Customers'
          ? `New users frequently looped on the onboarding step`
          : segment === 'At Risk'
          ? `At-risk users abandoned checkout at payment method selection`
          : `Users in Variant B frequently looped on the checkout step`
      },
      {
        type: 'Session replays',
        count: '31 sessions',
        behavior: segment === 'Mobile Users'
          ? `Mobile users struggling with CTA button visibility`
          : segment === 'Power Users'
          ? `Power users bypassing standard flow using keyboard shortcuts`
          : `Mobile users struggling with form field validation feedback`
      },
      {
        type: 'Support tickets',
        count: '8 tickets',
        behavior: `Increased questions about ${
          segment === 'New Customers' ? 'account setup process' :
          segment === 'Power Users' ? 'API rate limits and advanced features' :
          'payment method options'
        }`
      }
    ];
  };
  
  const generateDynamicEvents = (dateRange, metrics, segment, experiment) => {
    const events = [];
    const primaryMetric = metrics && metrics[0] ? metrics[0] : 'Conversion Rate';
    const segmentName = segment || 'All Customers';
    const experimentName = experiment || 'Search Algorithm Update';
    
    // Event 1: Experiment-specific launch event
    const experimentEvents = {
      'Search Algorithm Update': { icon: "🔍", date: "Nov 26", label: "Search algorithm v3.2 deployed", color: "blue" },
      'Dynamic Pricing Test': { icon: "💲", date: "Nov 20", label: "Dynamic pricing engine activated", color: "purple" },
      'Checkout Flow Redesign': { icon: "🛒", date: "Nov 15", label: "New checkout UI rolled out", color: "blue" },
      'Product Recommendations v2': { icon: "🎯", date: "Nov 18", label: "ML recommendation model updated", color: "purple" },
      'Payment Options Expansion': { icon: "💳", date: "Nov 22", label: "New payment methods added", color: "green" }
    };
    
    if (experimentEvents[experimentName]) {
      events.push(experimentEvents[experimentName]);
    } else {
      events.push({ icon: "🚀", date: "Nov 26", label: "Experiment launched", color: "blue" });
    }
    
    // Event 2: Based on primary metric and experiment
    if (primaryMetric === 'Conversion Rate') {
      if (experimentName === 'Checkout Flow Redesign') {
        events.push({ icon: "📈", date: "Dec 5", label: "Checkout completion rate +12%", color: "green" });
      } else if (experimentName === 'Search Algorithm Update') {
        events.push({ icon: "📈", date: "Dec 5", label: "Search-to-purchase rate improved", color: "green" });
      } else {
        events.push({ icon: "📈", date: "Dec 5", label: "Conversion spike detected", color: "green" });
      }
    } else if (primaryMetric === 'Revenue per User') {
      if (experimentName === 'Dynamic Pricing Test') {
        events.push({ icon: "💰", date: "Dec 5", label: "Average order value +$18", color: "green" });
      } else if (experimentName === 'Product Recommendations v2') {
        events.push({ icon: "💰", date: "Dec 5", label: "Cross-sell revenue increased", color: "green" });
      } else {
        events.push({ icon: "💰", date: "Dec 5", label: "Revenue milestone achieved", color: "green" });
      }
    } else if (primaryMetric === 'Session Duration') {
      events.push({ icon: "⏱️", date: "Dec 5", label: "Engagement peak observed", color: "purple" });
    } else if (primaryMetric === 'Bounce Rate') {
      events.push({ icon: "📊", date: "Dec 5", label: "Retention improvement", color: "green" });
    } else if (primaryMetric === 'Cart Abandonment') {
      if (experimentName === 'Checkout Flow Redesign' || experimentName === 'Payment Options Expansion') {
        events.push({ icon: "🛒", date: "Dec 5", label: "Cart abandonment -8%", color: "green" });
      } else {
        events.push({ icon: "🛒", date: "Dec 5", label: "Checkout optimization live", color: "purple" });
      }
    } else if (primaryMetric === 'Page Views') {
      events.push({ icon: "👁️", date: "Dec 5", label: "Traffic surge detected", color: "green" });
    }
    
    // Event 3: Experiment-specific milestone
    const experimentMilestones = {
      'Search Algorithm Update': { icon: "🎯", date: "Dec 7", label: "Search relevance score +23%", color: "purple" },
      'Dynamic Pricing Test': { icon: "📊", date: "Dec 7", label: "Price elasticity model validated", color: "purple" },
      'Checkout Flow Redesign': { icon: "✅", date: "Dec 7", label: "One-click checkout enabled", color: "purple" },
      'Product Recommendations v2': { icon: "🤖", date: "Dec 7", label: "AI model accuracy +15%", color: "purple" },
      'Payment Options Expansion': { icon: "🌍", date: "Dec 7", label: "Regional payment methods live", color: "purple" }
    };
    
    if (experimentMilestones[experimentName]) {
      events.push(experimentMilestones[experimentName]);
    } else {
      // Fallback to segment-based events
      if (segmentName === 'New Customers') {
        events.push({ icon: "✨", date: "Dec 7", label: "New user onboarding update", color: "blue" });
      } else if (segmentName === 'Power Users') {
        events.push({ icon: "⭐", date: "Dec 7", label: "Premium features launched", color: "purple" });
      } else if (segmentName === 'At Risk') {
        events.push({ icon: "⚠️", date: "Dec 7", label: "Re-engagement campaign started", color: "red" });
      } else if (segmentName === 'Returning Customers') {
        events.push({ icon: "🔄", date: "Dec 7", label: "Loyalty program enhancement", color: "purple" });
      } else {
        events.push({ icon: "📊", date: "Dec 7", label: "50% traffic rollout", color: "purple" });
      }
    }
    
    // Event 4: General system event for longer date ranges
    if (dateRange === 'Last 30 days') {
      events.push({ icon: "🔧", date: "Nov 20", label: "Platform optimization", color: "blue" });
    }
    
    return events;
  };
  
  const handleDataPointClick = (data) => {
    if (!data || !data.activePayload || !data.activePayload[0]) return;
    
    const clickedData = data.activePayload[0].payload;
    const date = clickedData.date;
    const primaryMetric = selectedMetrics && selectedMetrics[0] ? selectedMetrics[0] : 'Conversion Rate';
    const segment = selectedSegment || 'All Customers';
    
    const drilldown = generateDrilldownData(date, clickedData, primaryMetric, segment, selectedMetrics);
    setDrilldownData(drilldown);
    setShowDrilldownModal(true);
  };
  
  const generateDrilldownData = (date, dataPoint, primaryMetric, segment, allMetrics) => {
    // Calculate change percentage
    const metricKey = {
      'Conversion Rate': 'conversion',
      'Revenue per User': 'revenue',
      'Session Duration': 'sessionDuration',
      'Bounce Rate': 'bounceRate',
      'Cart Abandonment': 'cartAbandonment',
      'Page Views': 'pageViews'
    }[primaryMetric];
    
    const value = dataPoint[metricKey];
    const change = segment === 'Power Users' ? '+12.4%' : segment === 'At Risk' ? '-8.2%' : segment === 'New Customers' ? '-3.1%' : '+7.8%';
    const changeDirection = change.startsWith('+') ? 'increase' : 'decrease';
    
    // Generate AI Summary
    const aiSummary = `On ${date}, your ${primaryMetric} ${changeDirection}d by ${change.replace(/[+-]/g, '')} driven primarily by ${
      segment === 'Power Users' ? 'increased engagement from premium users' : 
      segment === 'New Customers' ? 'onboarding flow improvements' :
      segment === 'At Risk' ? 'churn prevention campaigns showing initial results' :
      'optimized user experience rollout'
    }. This change coincided with a significant shift in ${
      segment === 'New Customers' ? 'first-time user behavior' :
      segment === 'Mobile Users' ? 'mobile traffic (+18%)' : 
      'user engagement patterns'
    } and improved ${
      primaryMetric.includes('Rate') ? 'conversion funnel performance' : 'key metric performance'
    }. A secondary driver was ${
      allMetrics && allMetrics[1] ? allMetrics[1].toLowerCase() + ' optimization' : 'feature rollout'
    } deployed earlier in the week.`;
    
    // Generate Key Drivers
    const keyDrivers = [
      {
        title: segment === 'Power Users' ? 'Premium Feature Adoption' : segment === 'New Customers' ? 'Onboarding Optimization' : 'Feature Rollout Expansion',
        impact: 'high',
        description: segment === 'Power Users' 
          ? `Advanced feature usage increased among ${segment.toLowerCase()}, directly impacting ${value} ${primaryMetric.toLowerCase()} with 2.3M additional power user sessions throughout the day.`
          : segment === 'New Customers'
          ? `Simplified onboarding reduced drop-off by 35% for ${segment.toLowerCase()}, leading to ${value} ${primaryMetric.toLowerCase()} improvement.`
          : `The feature gate expanded from 50% to 75% exposure at 9:32 AM, directly impacting 2.3M additional users throughout the day.`
      },
      {
        title: segment === 'Mobile Users' ? 'Mobile Experience Enhancement' : segment === 'At Risk' ? 'Re-engagement Campaign' : primaryMetric + ' Surge',
        impact: 'high',
        description: segment === 'Mobile Users'
          ? `Mobile sessions increased 18% compared to the 7-day average, with mobile users showing 1.8x higher ${primaryMetric.toLowerCase()} than desktop during this period.`
          : segment === 'At Risk'
          ? `Targeted re-engagement emails sent to ${segment.toLowerCase()} resulted in 23% return rate and ${value} ${primaryMetric.toLowerCase()}.`
          : `${segment} showed ${value} ${primaryMetric.toLowerCase()} compared to the 7-day average, with sustained improvement throughout the day.`
      },
      {
        title: primaryMetric === 'Conversion Rate' ? 'Checkout Performance Improvement' : primaryMetric === 'Revenue per User' ? 'Upsell Optimization' : 'User Experience Enhancement',
        impact: 'medium',
        description: primaryMetric === 'Conversion Rate'
          ? `Average checkout page load time decreased by 120ms, correlating with a 6.2% lift in completion rate for users who reached the payment step.`
          : primaryMetric === 'Revenue per User'
          ? `Dynamic pricing algorithm adjusted for ${segment.toLowerCase()}, increasing average order value by $${value}.`
          : `Performance optimizations reduced latency by 120ms, improving ${primaryMetric.toLowerCase()} metrics across ${segment.toLowerCase()}.`
      },
      {
        title: 'Quality Filter Update',
        impact: 'medium',
        description: `New detection rules deployed on ${date} improved data quality by 8%, cleaning up the denominator and positively impacting the ${primaryMetric.toLowerCase()} metric.`
      }
    ];
    
    // Generate Segment Shifts
    const segmentShifts = [
      { name: 'Mobile Users', change: '+18.2%', trending: 'up' },
      { name: 'Returning Visitors', change: segment === 'Returning Customers' ? '+12.4%' : '+9.4%', trending: 'up' },
      { name: 'Premium Tier', change: segment === 'Power Users' ? '+8.9%' : '+5.1%', trending: 'up' },
      { name: 'Desktop Users', change: '-3.2%', trending: 'down' }
    ];
    
    const segmentSummary = `${segmentShifts.filter(s => s.trending === 'up')[0].name} and ${segmentShifts.filter(s => s.trending === 'up')[1].name} saw the largest positive shifts, while ${segmentShifts.filter(s => s.trending === 'down')[0].name} declined slightly.`;
    
    // Generate Anomalies
    const anomalies = [
      {
        title: 'Brief Logging Gap',
        time: '11:47 AM - 11:52 AM',
        severity: 'low',
        description: `5-minute data collection gap detected during ${date}. Impact on ${primaryMetric.toLowerCase()} measurement was minimal and has been interpolated.`
      }
    ];
    
    // Generate Historical Patterns
    const historicalPatterns = [
      {
        name: 'checkout_v2_september',
        description: segment === 'Mobile Users' ? 'Similar mobile-driven lift' : 'Comparable segment shift pattern',
        change: '+14.2%'
      },
      {
        name: 'pricing_test_q3',
        description: 'Related ' + primaryMetric.toLowerCase() + ' optimization',
        change: '+10.8%'
      },
      {
        name: 'onboarding_flow_august',
        description: segment === 'New Customers' ? 'Similar new user engagement' : 'Related performance improvement',
        change: '+8.5%'
      }
    ];
    
    return {
      date,
      metric: primaryMetric,
      value,
      change,
      changeDirection,
      aiSummary,
      keyDrivers,
      segmentShifts,
      segmentSummary,
      anomalies,
      historicalPatterns
    };
  };
  
  const handleHypothesisClick = (hypothesis) => {
    const segment = selectedSegment || 'All Customers';
    const metrics = selectedMetrics || ['Conversion Rate'];
    const dateRange = selectedDateRange || 'Last 7 days';
    
    const detailData = generateHypothesisDetailData(hypothesis, segment, metrics, dateRange);
    setHypothesisDetailData(detailData);
    setShowHypothesisModal(true);
  };
  
  const handleAIAnalysisClick = (analysis) => {
    // Create a modal with AI Analysis details
    const detailData = {
      title: analysis.title,
      description: analysis.description,
      confidence: analysis.confidence,
      impact: analysis.impact,
      evidenceTags: analysis.evidenceTags || [],
      expandedEvidence: {
        sessionData: `This insight is based on ${analysis.evidenceTags?.[0] || 'extensive session data'} collected during the experiment period.`,
        methodology: 'Analysis uses statistical significance testing, cohort comparison, and machine learning models to identify patterns.',
        historicalContext: analysis.evidenceTags?.find(tag => tag.includes('similar past')) 
          ? 'This finding is consistent with previous experiments, strengthening confidence in the results.'
          : 'This represents a novel insight for this type of experiment.',
        recommendations: generateRecommendations(analysis)
      }
    };
    setAIAnalysisDetailData(detailData);
    setShowAIAnalysisModal(true);
  };

  const generateRecommendations = (analysis) => {
    const baseRecs = [
      'Continue monitoring this metric closely over the next 14 days',
      'Consider expanding the experiment to additional user segments',
      'Document learnings for future experiment planning'
    ];
    
    if (analysis.confidence === 'High') {
      return [
        'Strong signal detected - recommend full rollout after validation period',
        ...baseRecs
      ];
    } else if (analysis.confidence === 'Medium') {
      return [
        'Results promising but suggest extended testing period',
        ...baseRecs
      ];
    } else {
      return [
        'Insufficient confidence - recommend additional data collection',
        ...baseRecs
      ];
    }
  };
  
  const generateHypothesisDetailData = (hypothesis, segment, metrics, dateRange) => {
    const primaryMetric = metrics[0] || 'Conversion Rate';
    
    // Generate AI Analysis
    const aiAnalysis = `The unexpected metric movement starting November 28th is most likely attributed to a combination of ${
      segment === 'Power Users' ? 'advanced feature adoption and premium tier engagement' :
      segment === 'New Customers' ? 'onboarding flow improvements and first-time user experience enhancements' :
      segment === 'At Risk' ? 'targeted re-engagement campaigns and retention initiatives' :
      'increased mobile web traffic from organic search and experiment rollout'
    }. ${
      segment === 'New Customers' ? 'New users from organic search traditionally convert at lower rates' :
      segment === 'Power Users' ? 'Power users demonstrate higher engagement with personalized features' :
      'Mobile users from organic search traditionally show different behavior patterns'
    }, and the simultaneous expansion of the ${
      selectedExperiment || 'checkout experiment'
    }—which has shown ${
      segment === 'At Risk' ? 'promising early indicators' : 'strong performance'
    } in previous iterations—creates a compounding effect. ${
      dateRange === 'Last 30 days' ? 'Extended observation over 30 days confirms' : 'Analysis shows'
    } weekend behavioral anomalies further amplified the impact during the initial detection window.`;
    
    // Generate hypothesis cards with confidence bars
    const hypothesisCards = [
      {
        title: segment === 'Mobile Users' ? 'Increased Mobile Web Traffic from Organic Search' : 
               segment === 'Power Users' ? 'Premium Feature Engagement Surge' :
               segment === 'New Customers' ? 'Onboarding Flow Optimization Impact' :
               `Increased ${primaryMetric} from ${segment}`,
        description: segment === 'Mobile Users' 
          ? `A 47% increase in mobile web sessions from organic search began on Nov 28, correlating with the ${primaryMetric.toLowerCase()} movement. This segment historically shows 22% lower conversion rates compared to desktop users.`
          : segment === 'Power Users'
          ? `${segment} demonstrated 47% increase in feature utilization, directly correlating with the ${primaryMetric.toLowerCase()} improvement. Advanced customization usage up 65% during the period.`
          : segment === 'New Customers'
          ? `Simplified onboarding reduced initial friction by 35%, with ${segment.toLowerCase()} showing 28% faster time-to-first-action compared to previous cohorts.`
          : `A 47% increase in sessions from ${segment.toLowerCase()} began on Nov 28, correlating with the ${primaryMetric.toLowerCase()} movement across ${dateRange.toLowerCase()}.`,
        confidence: 'High Confidence',
        confidencePercent: segment === 'Power Users' ? 89 : segment === 'Mobile Users' ? 89 : 82,
        reason: segment === 'Mobile Users' ? 'Segment shift detected in traffic sources' :
                segment === 'Power Users' ? 'Feature usage patterns strongly correlate' :
                segment === 'New Customers' ? 'Cohort analysis shows clear attribution' :
                'Traffic pattern analysis confirms attribution'
      },
      {
        title: `Experiment ${selectedExperiment || 'checkout-flow-v3'} Reached 50% Rollout`,
        description: `The ${selectedExperiment || 'checkout flow'} experiment increased from 25% to 50% exposure on Nov 27, affecting 180K additional ${segment.toLowerCase()}. Past similar experiments showed temporary ${primaryMetric.toLowerCase()} dips during scale-up periods.`,
        confidence: 'Medium Confidence',
        confidencePercent: 76,
        reason: 'Exposure pattern change with historical precedent'
      },
      {
        title: segment === 'At Risk' ? 'Re-engagement Campaign Impact' : 'Weekend User Behavior Anomaly',
        description: segment === 'At Risk'
          ? `Targeted campaigns reached 45% of ${segment.toLowerCase()} users, resulting in 23% return rate and measurable ${primaryMetric.toLowerCase()} lift within the ${dateRange.toLowerCase()} window.`
          : `Users accessing the platform on weekends (Nov 30 - Dec 1) exhibited 31% higher bounce rates than typical weekend patterns. This cohort represents 18% of total traffic during the anomaly window.`,
        confidence: 'Medium Confidence',
        confidencePercent: 68,
        reason: segment === 'At Risk' ? 'Campaign metrics directly measurable' : 'Temporal behavior spike in specific cohort'
      },
      {
        title: `${primaryMetric} Latency Increase`,
        description: `Third-party payment processing latency increased by 340ms (avg: 890ms to 1230ms) starting Nov 28. Correlated ${metrics[1] || 'session duration'} show similar timing, though magnitude falls within historical variance.`,
        confidence: 'Low Confidence',
        confidencePercent: 45,
        reason: 'Timing correlation but magnitude within normal range'
      }
    ];
    
    // Generate Evidence Breakdown sections
    const evidenceBreakdown = {
      trafficSource: {
        title: 'Traffic Source Analysis',
        content: segment === 'Mobile Users'
          ? `Logs Explorer patterns reveal a sharp 47% increase in sessions originating from Google organic search on mobile devices. This surge began at 2:14 AM UTC on November 28th and sustained through the anomaly window. Session recordings show these users exhibited different navigation patterns, with 38% higher rates of category browsing versus direct product searches.`
          : segment === 'Power Users'
          ? `Analytics reveal ${segment.toLowerCase()} increased usage of advanced features by 47%, with session depth growing 38% compared to baseline. Feature engagement heatmaps show concentrated activity in customization and automation tools.`
          : segment === 'New Customers'
          ? `Session analysis shows ${segment.toLowerCase()} completed onboarding 45% faster, with 38% higher engagement in guided product tours. First-session ${primaryMetric.toLowerCase()} improved 28% versus previous cohort.`
          : `Logs Explorer patterns reveal a sharp 47% increase in ${segment.toLowerCase()} sessions during ${dateRange.toLowerCase()}. This surge began at 2:14 AM UTC on November 28th and sustained through the anomaly window.`
      },
      experimentRollout: {
        title: 'Experiment Rollout Events',
        content: `Feature gate logs confirm exp-${selectedExperiment || 'checkout-flow-v3'} scaled from 25% to 50% at 6:00 PM UTC on November 27th. The experiment modifies the payment selection UI and introduces a progress indicator. Rollout events show clean distribution across user segments with no targeting bias. Historical data from exp-checkout-v1 and exp-checkout-v2 demonstrates similar temporary ${primaryMetric.toLowerCase()} dips (averaging 3-5 days) during initial scale-up phases.`
      },
      correlatedMetrics: {
        title: 'Correlated Metrics',
        content: `Three supporting metrics moved in tandem: ${
          metrics[1] || 'bounce rate'
        } increased 18%, ${
          metrics[2] || 'average session duration'
        } decreased 12%, and ${
          primaryMetric.toLowerCase()
        } declined 9%. These movements align with the ${
          segment === 'Mobile Users' ? 'mobile traffic influx' :
          segment === 'Power Users' ? 'power user engagement surge' :
          segment === 'New Customers' ? 'new customer onboarding optimization' :
          'traffic pattern shift'
        } hypothesis. Additionally, payment provider monitoring logs show elevated P95 latency beginning November 28th, though the magnitude (340ms increase) falls within historical variance and may be a secondary contributor rather than primary cause.`
      },
      qualitativeSignals: {
        title: 'Qualitative Signals',
        content: segment === 'At Risk'
          ? `Customer support ticket volume increased 14% during the window, with 62% of tickets from ${segment.toLowerCase()} users mentioning re-engagement emails and returned interest. User feedback surveys (n=847) collected during the period show a 0.4 point increase in satisfaction scores specifically among ${segment.toLowerCase()} participants.`
          : `Customer support ticket volume increased 14% during the window, with 62% of tickets from ${
            segment === 'Mobile Users' ? 'mobile users' : segment.toLowerCase()
          } mentioning "${
            segment === 'Mobile Users' ? 'slow checkout' :
            segment === 'Power Users' ? 'feature discoverability' :
            segment === 'New Customers' ? 'unclear navigation' :
            'confusing payment options'
          }." User feedback surveys (n=847) collected during the period show a 0.4 point ${
            segment === 'Power Users' ? 'increase' : 'decrease'
          } in ${primaryMetric.toLowerCase().includes('rate') ? 'completion' : 'satisfaction'} scores specifically among ${segment === 'Mobile Users' ? 'mobile' : 'experiment'} participants, corroborating the hypothesis that ${
            segment === 'Power Users' ? 'feature enhancements contributed to' :
            'experiment scale-up contributed to'
          } the metric movement.`
      }
    };
    
    return {
      hypothesis,
      segment,
      primaryMetric,
      metrics,
      dateRange,
      aiAnalysis,
      hypothesisCards,
      evidenceBreakdown
    };
  };
  
  const handleSegmentClick = () => {
    const segment = selectedSegment || 'All Customers';
    const metrics = selectedMetrics || ['Conversion Rate'];
    const primaryMetric = metrics[0];
    
    const detailData = generateSegmentDetailData(segment, primaryMetric, metrics);
    setSegmentDetailData(detailData);
    setShowSegmentModal(true);
  };
  
  const generateSegmentDetailData = (currentSegment, primaryMetric, allMetrics) => {
    // Generate summary text
    const topSegment = currentSegment === 'Power Users' ? 'Mobile App Users' : 
                       currentSegment === 'New Customers' ? 'Returning Customers' :
                       'Mobile App Users';
    const topChange = currentSegment === 'Power Users' ? '+22.2%' : 
                      currentSegment === 'New Customers' ? '+18.5%' :
                      '+22.2%';
    const topOldValue = currentSegment === 'Power Users' ? '3.42' : 
                        currentSegment === 'New Customers' ? '2.87' :
                        '3.42';
    const topNewValue = currentSegment === 'Power Users' ? '4.18' : 
                        currentSegment === 'New Customers' ? '3.41' :
                        '4.18';
    
    const summary = `${topSegment} showed the largest deviation with a ${topChange} ${topChange.startsWith('+') ? 'increase' : 'decrease'}, ${topChange.startsWith('+') ? 'positively' : 'negatively'} impacting the metric from ${topOldValue} to ${topNewValue}.`;
    
    // Generate segment breakdown table
    const segmentBreakdown = [
      {
        name: 'Mobile App Users',
        baseline: currentSegment === 'Power Users' ? '3.42' : '3.58',
        newValue: currentSegment === 'Power Users' ? '4.18' : '4.37',
        change: currentSegment === 'Power Users' ? '+22.2%' : '+22.1%',
        isPositive: true
      },
      {
        name: 'Desktop Users',
        baseline: '2.87',
        newValue: '2.91',
        change: '+1.4%',
        isPositive: true
      },
      {
        name: currentSegment === 'New Customers' ? 'New Users (0-7 days)' : 'New Users (0-7 days)',
        baseline: '2.14',
        newValue: currentSegment === 'New Customers' ? '2.03' : '1.89',
        change: currentSegment === 'New Customers' ? '-5.1%' : '-11.7%',
        isPositive: false
      },
      {
        name: 'Power Users (100+ sessions)',
        baseline: '5.23',
        newValue: currentSegment === 'Power Users' ? '5.55' : '5.31',
        change: currentSegment === 'Power Users' ? '+6.1%' : '+1.5%',
        isPositive: true
      },
      {
        name: 'Free Tier Users',
        baseline: '2.56',
        newValue: '2.48',
        change: '-3.1%',
        isPositive: false
      },
      {
        name: 'Premium Subscribers',
        baseline: '4.91',
        newValue: '5.12',
        change: '+4.3%',
        isPositive: true
      }
    ];
    
    // Generate AI explanation
    const aiExplanation = currentSegment === 'Power Users'
      ? `The significant increase in Power Users (+${segmentBreakdown[3].change}) correlates with improved feature discoverability following the recent ${primaryMetric.toLowerCase()} optimization. The exposure distribution shifted heavily toward power user workflows during the analysis period, where the new advanced settings interface reduced friction in the core user journey. Conversely, New Users experienced a decline, suggesting onboarding UX differences may be creating barriers to activation. This bifurcation indicates that existing behavior patterns benefit from the changes while initial user experience requires optimization.`
      : currentSegment === 'New Customers'
      ? `The significant increase in Mobile App Users (+${segmentBreakdown[0].change}) correlates with improved feature discoverability following the recent UI update. The exposure distribution shifted heavily toward mobile platforms during the analysis period, where the new quick action interface reduced friction in the core user journey. Conversely, New Users experienced an ${segmentBreakdown[2].change} decline, suggesting onboarding UX differences may be creating barriers to activation. This bifurcation indicates that existing behavior patterns benefit from the changes while initial user experience requires optimization.`
      : currentSegment === 'At Risk'
      ? `The significant increase in Mobile App Users (+${segmentBreakdown[0].change}) shows promising re-engagement among at-risk customers who primarily use mobile. The targeted campaigns combined with improved ${primaryMetric.toLowerCase()} have successfully reduced churn signals. However, New Users continue to show decline, indicating that while retention initiatives are working, acquisition optimization remains a priority area.`
      : `The significant increase in Mobile App Users (+${segmentBreakdown[0].change}) correlates with improved feature discoverability following the recent UI update. The exposure distribution shifted heavily toward mobile platforms during the analysis period, where the new quick action interface reduced friction in the core user journey. Conversely, New Users experienced an ${segmentBreakdown[2].change} decline, suggesting onboarding UX differences may be creating barriers to activation. This bifurcation indicates that existing behavior patterns benefit from the changes while initial user experience requires optimization.`;
    
    // Generate behavioral evidence cards
    const behavioralEvidence = [
      {
        title: 'Session Replays',
        subtitle: 'forty seven replays',
        description: currentSegment === 'Power Users'
          ? 'Power users discovered advanced features 35% faster, utilizing new keyboard shortcuts and customization options that streamlined their workflows.'
          : currentSegment === 'New Customers'
          ? 'Mobile users discovered the new quick action button leading to 35% faster task completion'
          : currentSegment === 'At Risk'
          ? 'At-risk users showed 28% higher engagement with re-engagement prompts and personalized content recommendations'
          : 'Mobile users discovered the new quick action button leading to 35% faster task completion'
      },
      {
        title: 'Auto User Testing',
        subtitle: 'twelve recordings',
        description: currentSegment === 'New Customers'
          ? 'New users expressed confusion during onboarding flow causing early drop-off in critical actions. 42% abandoned at profile setup step.'
          : currentSegment === 'Power Users'
          ? 'Power users requested additional automation features, with 67% exploring API documentation and integration options.'
          : 'New users expressed confusion during onboarding flow causing early drop-off in critical actions'
      },
      {
        title: 'Qualitative Patterns',
        subtitle: 'twenty three interviews',
        description: currentSegment === 'Power Users'
          ? 'Power users reported improved satisfaction with advanced analytics and export capabilities, rating the experience 4.7/5.'
          : currentSegment === 'At Risk'
          ? 'At-risk users mentioned improved notification relevance and appreciated personalized re-engagement emails (satisfaction +0.8 points).'
          : 'Premium users reported improved satisfaction with the streamlined checkout experience'
      }
    ];
    
    return {
      summary,
      topSegment,
      topChange,
      topOldValue,
      topNewValue,
      segmentBreakdown,
      aiExplanation,
      behavioralEvidence,
      currentSegment,
      primaryMetric
    };
  };
  
  const handleAnomalyClick = (anomaly) => {
    const segment = selectedSegment || 'All Customers';
    const metrics = selectedMetrics || ['Conversion Rate'];
    const primaryMetric = metrics[0];
    const experiment = selectedExperiment || 'Search Algorithm Update';
    
    const detailData = generateAnomalyDetailData(anomaly, segment, primaryMetric, experiment);
    setAnomalyDetailData(detailData);
    setShowAnomalyModal(true);
  };
  
  const generateAnomalyDetailData = (anomaly, segment, primaryMetric, experiment) => {
    // Generate critical alert if severity is high
    const showCriticalAlert = anomaly.severity === 'High';
    const criticalMessage = showCriticalAlert 
      ? `Critical anomaly detected at 14:32 UTC. Database query latency spiked by 340%, causing widespread timeout errors and degraded user experience across profile and catalog services.`
      : null;
    
    // Generate anomaly cards
    const anomalyCards = [
      {
        title: 'Database Query Latency Spike',
        severity: 'Critical',
        timestamp: '2025-12-08 14:32:18 UTC',
        description: experiment === 'Checkout Flow Redesign'
          ? `Database read operations experienced a 340% increase in average latency, peaking at 2.8 seconds compared to baseline of 0.65 seconds. The spike affected user profile queries and product catalog lookups, correlating with increased timeout errors in the checkout flow.`
          : experiment === 'Search Algorithm Update'
          ? `Database read operations experienced a 340% increase in average latency, peaking at 2.8 seconds compared to baseline of 0.65 seconds. The spike affected search index queries and recommendation engine lookups, correlating with increased timeout errors.`
          : `Database read operations experienced a 340% increase in average latency, peaking at 2.8 seconds compared to baseline of 0.65 seconds. The spike affected user profile queries and product catalog lookups, correlating with increased timeout errors in the application layer.`,
        tags: ['infrastructure', 'logs explorer']
      },
      {
        title: 'Event Pipeline Processing Delay',
        severity: 'High',
        timestamp: '2025-12-08 14:28:45 UTC',
        description: segment === 'Power Users'
          ? `Event ingestion queue accumulated a backlog of approximately 125,000 events over a 6-minute period. Processing throughput dropped from 850 events/second to 180 events/second, causing delayed ${primaryMetric.toLowerCase()} updates and analytics dashboards to display stale data for power users.`
          : segment === 'New Customers'
          ? `Event ingestion queue accumulated a backlog of approximately 125,000 events over a 6-minute period. Processing throughput dropped from 850 events/second to 180 events/second, causing delayed onboarding analytics and new user ${primaryMetric.toLowerCase()} tracking.`
          : `Event ingestion queue accumulated a backlog of approximately 125,000 events over a 6-minute period. Processing throughput dropped from 850 events/second to 180 events/second, causing delayed metric updates and analytics dashboards to display stale data.`,
        tags: ['event pipeline', 'infrastructure']
      },
      {
        title: 'Elevated Error Rate in Payment Service',
        severity: 'High',
        timestamp: '2025-12-08 14:30:12 UTC',
        description: experiment === 'Payment Options Expansion'
          ? `Payment processing service returned HTTP 503 errors at a rate of 12.4%, significantly higher than the baseline of 0.3%. Most errors were traced to new payment gateway integrations timing out, resulting in failed transaction attempts and abandoned checkout flows for ${segment.toLowerCase()}.`
          : `Payment processing service returned HTTP 503 errors at a rate of 12.4%, significantly higher than the baseline of 0.3%. Most errors were traced to downstream payment gateway timeouts, resulting in failed transaction attempts and abandoned checkout flows.`,
        tags: ['logs explorer', 'infrastructure']
      }
    ];
    
    // Generate impact assessment
    const impactAssessment = {
      paragraphs: [
        experiment === 'Checkout Flow Redesign'
          ? `The observed ${primaryMetric.toLowerCase()} degradation is primarily attributable to the cascading failure that initiated with the database latency spike at 14:32 UTC. This infrastructure-level anomaly created a bottleneck that propagated through the checkout event processing pipeline, causing the subsequent backlog detected at 14:28 UTC.`
          : experiment === 'Search Algorithm Update'
          ? `The observed ${primaryMetric.toLowerCase()} degradation is primarily attributable to the cascading failure that initiated with the database latency spike at 14:32 UTC. This infrastructure-level anomaly created a bottleneck that propagated through the search and recommendation pipeline, causing the subsequent backlog detected at 14:28 UTC.`
          : `The observed metric degradation is primarily attributable to the cascading failure that initiated with the database latency spike at 14:32 UTC. This infrastructure-level anomaly created a bottleneck that propagated through the event processing pipeline, causing the subsequent backlog detected at 14:28 UTC.`,
        
        segment === 'Power Users'
          ? `The elevated error rates in the payment service appear to be a downstream consequence of these infrastructure issues. As database queries timed out, the payment service was unable to verify user account details and transaction histories within acceptable timeframes, leading to defensive timeout responses and failed payment attempts. Power users were disproportionately affected due to their complex transaction histories requiring more database lookups.`
          : segment === 'New Customers'
          ? `The elevated error rates in the payment service appear to be a downstream consequence of these infrastructure issues. As database queries timed out, the payment service was unable to verify new user account details within acceptable timeframes, leading to defensive timeout responses and failed payment attempts. New customers experienced higher friction during their first purchase attempts.`
          : `The elevated error rates in the payment service appear to be a downstream consequence of these infrastructure issues. As database queries timed out, the payment service was unable to verify user account details and transaction histories within acceptable timeframes, leading to defensive timeout responses and failed payment attempts.`,
        
        `Combined, these anomalies likely account for 85-92% of the ${primaryMetric.toLowerCase()} change observed during this period. The remaining variance may be attributed to normal traffic patterns and user behavior fluctuations.`
      ],
      poweredBy: 'OpenAI'
    };
    
    return {
      showCriticalAlert,
      criticalMessage,
      anomalyCards,
      impactAssessment,
      primaryMetric,
      segment,
      experiment
    };
  };
  
  const handleBehavioralClick = () => {
    const segment = selectedSegment || 'All Customers';
    const metrics = selectedMetrics || ['Conversion Rate'];
    const primaryMetric = metrics[0];
    const experiment = selectedExperiment || 'Search Algorithm Update';
    
    const detailData = generateBehavioralDetailData(segment, primaryMetric, experiment);
    setBehavioralDetailData(detailData);
    setShowBehavioralModal(true);
  };
  
  const generateBehavioralDetailData = (segment, primaryMetric, experiment) => {
    // Generate dominant pattern summary
    const dominantPattern = segment === 'Power Users'
      ? `Dominant behavioral pattern: Keyboard Shortcut Exploration detected across multiple interaction points, indicating power users seeking efficiency improvements. This pattern correlates strongly with a 31% decrease in task completion time.`
      : segment === 'New Customers'
      ? `Dominant behavioral pattern: Onboarding Confusion Clusters detected across multiple interaction points, indicating new user uncertainty about interface actions. This pattern correlates strongly with a 23% increase in task completion time.`
      : experiment === 'Checkout Flow Redesign'
      ? `Dominant behavioral pattern: Hover Loop Clusters detected across multiple interaction points, indicating widespread user hesitation and uncertainty about interface actions. This pattern correlates strongly with a 23% increase in task completion time.`
      : experiment === 'Search Algorithm Update'
      ? `Dominant behavioral pattern: Search Refinement Loops detected across multiple interaction points, indicating user difficulty finding relevant results. This pattern correlates strongly with a 28% increase in time to conversion.`
      : `Dominant behavioral pattern: Hover Loop Clusters detected across multiple interaction points, indicating widespread user hesitation and uncertainty about interface actions. This pattern correlates strongly with a 23% increase in task completion time.`;
    
    // Generate behavior pattern cards
    const behaviorPatterns = [
      {
        title: segment === 'Power Users' ? 'Keyboard Shortcut Exploration' : 
               segment === 'New Customers' ? 'Onboarding Hesitation Pattern' :
               experiment === 'Search Algorithm Update' ? 'Search Result Confusion' :
               'Hover Loop Cluster',
        color: 'orange',
        count: '47 session replays',
        description: segment === 'Power Users'
          ? `Power users repeatedly attempted keyboard shortcuts on interactive elements, averaging 5.2 attempts per session. This pattern suggests users are trying to optimize their workflow but lack documentation on available shortcuts.`
          : segment === 'New Customers'
          ? `New users repeatedly hovered over the "Get Started" button without clicking, averaging 4.2 hover events per session. This pattern suggests uncertainty about the action's outcome or missing contextual information about what happens next.`
          : experiment === 'Checkout Flow Redesign'
          ? `Users repeatedly hovered over the submit button without clicking, averaging 4.2 hover events per session. This pattern suggests uncertainty about the action's outcome or missing contextual information about what happens next.`
          : experiment === 'Search Algorithm Update'
          ? `Users repeatedly refined search queries without clicking results, averaging 3.8 query modifications per session. This pattern suggests poor result relevance or unclear result presentation.`
          : `Users repeatedly hovered over the submit button without clicking, averaging 4.2 hover events per session. This pattern suggests uncertainty about the action's outcome or missing contextual information about what happens next.`
      },
      {
        title: segment === 'Power Users' ? 'Feature Discovery Attempts' :
               segment === 'New Customers' ? 'Navigation Confusion Loop' :
               experiment === 'Payment Options Expansion' ? 'Payment Method Indecision' :
               'Rage Click Pattern',
        color: 'pink',
        count: '23 session replays',
        description: segment === 'Power Users'
          ? `Power users explored hidden menus and settings panels, clicking an average of 7.3 different menu items per session. This indicates strong desire for advanced capabilities but difficulty discovering them through the current interface.`
          : segment === 'New Customers'
          ? `New users navigated between Settings and Profile tabs an average of 3.8 times without completing any action. Click patterns show uncertainty about which tab contains account management features.`
          : experiment === 'Checkout Flow Redesign'
          ? `Concentrated rapid clicking detected on the disabled input field, with users attempting 8-12 clicks in rapid succession. This indicates a failure to communicate why the field is disabled or what prerequisite actions are needed.`
          : experiment === 'Payment Options Expansion'
          ? `Users switched between payment methods an average of 4.1 times before completing checkout. This suggests either indecision about payment security or unclear information about payment options.`
          : `Concentrated rapid clicking detected on the disabled input field, with users attempting 8-12 clicks in rapid succession. This indicates a failure to communicate why the field is disabled or what prerequisite actions are needed.`
      },
      {
        title: 'Confused Navigation Sequence',
        color: 'purple',
        count: '31 session replays',
        description: segment === 'New Customers'
          ? `New users navigated between Tutorial and Help tabs an average of 3.8 times without completing any action. Click patterns show uncertainty about where to find getting started information.`
          : `Users navigated between Settings and Profile tabs an average of 3.8 times without completing any action. Click patterns show uncertainty about which tab contains account management features.`
      },
      {
        title: experiment === 'Checkout Flow Redesign' ? 'Checkout Abandonment Zone' :
               experiment === 'Dynamic Pricing Test' ? 'Pricing Hesitation Zone' :
               segment === 'At Risk' ? 'Re-engagement Drop-off' :
               'Abandonment Zone',
        color: 'blue',
        count: '10 auto testing recordings',
        description: experiment === 'Checkout Flow Redesign'
          ? `High exit rate (34%) immediately after viewing the payment section. Scroll depth data shows users reached this point but did not proceed further, with average time on section of only 2.3 seconds before exit.`
          : experiment === 'Dynamic Pricing Test'
          ? `High exit rate (29%) immediately after viewing the pricing section. Heat map data shows users focused on prices but did not proceed further, with average time on section of only 3.1 seconds before exit.`
          : segment === 'At Risk'
          ? `High exit rate (38%) immediately after re-engagement notification. Scroll depth data shows at-risk users acknowledged the message but did not proceed further, with average time on section of only 1.8 seconds before exit.`
          : `High exit rate (34%) immediately after viewing the pricing section. Scroll depth data shows users reached this point but did not proceed further, with average time on section of only 2.3 seconds before exit.`
      }
    ];
    
    // Generate linked impact text
    const linkedImpact = segment === 'Power Users'
      ? `The identified keyboard shortcut attempts and feature discovery patterns show a strong positive correlation with engagement depth (r = 0.82, p < 0.01). Sessions containing these behaviors had 38% higher feature adoption rates compared to baseline. Additionally, task completion efficiency improved by 31% when users successfully discovered shortcuts. Resolving these UX friction points by implementing visible keyboard shortcut hints could potentially increase power user retention by 15% based on current usage patterns.`
      : segment === 'New Customers'
      ? `The identified navigation confusion and onboarding hesitation patterns show a strong negative correlation with ${primaryMetric.toLowerCase()} (r = -0.78, p < 0.01). Sessions containing these behaviors had 42% lower conversion rates compared to baseline. Additionally, task completion time increased by 23% when these patterns were present. The abandonment zone directly accounts for an estimated 18% reduction in overall onboarding completion rate. Resolving these behavioral friction points could potentially recover 650 new customer conversions per month based on current traffic volumes.`
      : experiment === 'Checkout Flow Redesign'
      ? `The identified hover loop and rage click patterns show a strong negative correlation with ${primaryMetric.toLowerCase()} (r = -0.78, p < 0.01). Sessions containing these behaviors had 42% lower conversion rates compared to baseline. Additionally, task completion time increased by 23% when these patterns were present. The abandonment zone in the pricing section directly accounts for an estimated 12% reduction in overall funnel completion rate. Resolving these behavioral friction points could potentially recover 890 conversions per month based on current traffic volumes.`
      : experiment === 'Search Algorithm Update'
      ? `The identified search refinement loops and result confusion patterns show a strong negative correlation with ${primaryMetric.toLowerCase()} (r = -0.71, p < 0.01). Sessions containing these behaviors had 35% lower conversion rates compared to baseline. Additionally, time to conversion increased by 28% when these patterns were present. Resolving these search experience friction points could potentially improve conversion efficiency by 890 users per month based on current traffic volumes.`
      : `The identified hover loop and rage click patterns show a strong negative correlation with conversion rate (r = -0.78, p < 0.01). Sessions containing these behaviors had 42% lower conversion rates compared to baseline. Additionally, task completion time increased by 23% when these patterns were present. The abandonment zone in the pricing section directly accounts for an estimated 12% reduction in overall funnel completion rate. Resolving these behavioral friction points could potentially recover 890 conversions per month based on current traffic volumes.`;
    
    return {
      dominantPattern,
      behaviorPatterns,
      linkedImpact,
      segment,
      primaryMetric,
      experiment
    };
  };
  
  const applySegmentMultipliers = (data, segment) => {
    const segmentMultipliers = {
      "New Customers": {
        conversion: 0.85,
        revenue: 0.75,
        sessionDuration: 0.90,
        bounceRate: 1.20,
        cartAbandonment: 1.35,
        pageViews: 1.15
      },
      "Returning Customers": {
        conversion: 1.25,
        revenue: 1.40,
        sessionDuration: 1.10,
        bounceRate: 0.70,
        cartAbandonment: 0.65,
        pageViews: 0.95
      },
      "Power Users": {
        conversion: 1.45,
        revenue: 1.80,
        sessionDuration: 1.35,
        bounceRate: 0.55,
        cartAbandonment: 0.45,
        pageViews: 1.60
      },
      "At Risk": {
        conversion: 0.60,
        revenue: 0.50,
        sessionDuration: 0.70,
        bounceRate: 1.50,
        cartAbandonment: 1.80,
        pageViews: 0.75
      }
    };
    
    const multipliers = segmentMultipliers[segment];
    if (!multipliers) return data;
    
    return data.map(item => ({
      ...item,
      conversion: Math.round(item.conversion * multipliers.conversion),
      revenue: Math.round(item.revenue * multipliers.revenue),
      sessionDuration: Math.round(item.sessionDuration * multipliers.sessionDuration),
      bounceRate: Math.round(item.bounceRate * multipliers.bounceRate),
      cartAbandonment: Math.round(item.cartAbandonment * multipliers.cartAbandonment),
      pageViews: Math.round(item.pageViews * multipliers.pageViews)
    }));
  };
  
  const generateDateRangeData = (startDate, endDate, baseData) => {
    // For now, use the full 14 day data with updated labels
    return baseData.map((item, idx) => ({
      ...item,
      date: formatDateForRange(startDate, endDate, idx, baseData.length)
    }));
  };
  
  const generateCustomDateRangeData = (startDate, endDate, baseData) => {
    // Calculate days between dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    // Use appropriate amount of data points
    const numPoints = Math.min(daysDiff + 1, baseData.length);
    return baseData.slice(0, numPoints).map((item, idx) => {
      const currentDate = new Date(start);
      currentDate.setDate(currentDate.getDate() + idx);
      return {
        ...item,
        date: formatDate(currentDate)
      };
    });
  };
  
  const formatDateForRange = (startDate, endDate, index, total) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [startMonth, startDay] = startDate.split(' ');
    const [endMonth, endDay] = endDate.split(' ');
    
    // Distribute indices across the date range
    const monthIdx = months.indexOf(startMonth);
    const startDayNum = parseInt(startDay);
    
    const currentDate = new Date(2024, monthIdx, startDayNum);
    currentDate.setDate(currentDate.getDate() + index);
    
    return `${months[currentDate.getMonth()]} ${currentDate.getDate()}`;
  };
  
  const formatDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  };

  useEffect(() => {
    if (analysisRun) {
      updateData();
    }
  }, [selectedExperiment, selectedDateRange, selectedMetrics, selectedSegment, customStartDate, customEndDate, selectedSessionReplay]);
  
  useEffect(() => {
    // Lock body scroll when modal is open
    if (showDrilldownModal || showCustomDatePicker || showHypothesisModal || showSegmentModal || showAnomalyModal || showBehavioralModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDrilldownModal, showCustomDatePicker, showHypothesisModal, showSegmentModal, showAnomalyModal, showBehavioralModal]);

  const toggleInsight = (insightId) => {
    setExpandedInsight(expandedInsight === insightId ? null : insightId);
  };

  const canRunAnalysis = selectedExperiment && selectedDateRange && selectedMetrics.length > 0;

  // Get metrics to display in graph based on selection
  const getMetricsKeys = () => {
    const metricsMap = {
      'Conversion Rate': 'conversion',
      'Revenue per User': 'revenue',
      'Session Duration': 'sessionDuration',
      'Bounce Rate': 'bounceRate',
      'Cart Abandonment': 'cartAbandonment',
      'Page Views': 'pageViews'
    };
    
    return selectedMetrics.map(m => ({
      key: metricsMap[m] || 'conversion',
      name: m,
      color: getMetricColor(m)
    })).filter(m => m.key);
  };

  const getMetricColor = (metric) => {
    const colors = {
      'Conversion Rate': '#5DADE2',    // Blue (first metric)
      'Revenue per User': '#2C3E50',   // Black/dark charcoal (second metric)
      'Session Duration': '#52C9A8',   // Mint/teal green (third metric)
      'Bounce Rate': '#E387B5',        // Pink
      'Cart Abandonment': '#9B7BB3',   // Purple
      'Page Views': '#E57373'          // Coral red
    };
    return colors[metric] || '#5DADE2';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - same as before */}
      <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
              <path d="M20 2 L35 12 L35 28 L20 38 L5 28 L5 12 Z" fill="#2C3E50"/>
              <circle cx="10" cy="28" r="2" fill="white"/>
              <path d="M10 28 L16 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="18" r="2" fill="white"/>
              <path d="M16 18 L22 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="22" cy="24" r="2" fill="white"/>
              <path d="M22 24 L30 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="30" cy="12" r="2" fill="white"/>
            </svg>
            <span className="font-bold text-xl text-gray-900">STATSIG</span>
          </div>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
            <span className="ml-auto text-xs text-gray-400">⌘ + K</span>
          </button>
        </div>

        <nav className="px-2 space-y-1">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="8" width="16" height="8" rx="4" strokeWidth={2} />
              <circle cx="8" cy="12" r="2.5" fill="currentColor" />
            </svg>
            <span>Feature Management</span>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span>Experimentation</span>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <div>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="2" y="4" width="14" height="12" rx="1" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l2.5-3 2.5 3 3-4" />
                <circle cx="18" cy="18" r="3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l2 2" />
              </svg>
              <span>Analytics</span>
              <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="ml-6 mt-1 space-y-1">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                <span>Metrics Explorer</span>
              </button>
              <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                <span>Logs Explorer</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Beta</span>
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                <span>Dashboards</span>
              </button>
              
              <div>
                <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                  <span>Topline Alerts</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Beta</span>
                </button>
                
                <div className="mt-1">
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg">
                    <span>Change Intelligence</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Beta</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Users & Sessions</span>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
            <span>Data</span>
            <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Change Intelligence</h1>
          <p className="text-sm text-gray-600">Understand metric movements with AI-enhanced analysis across experiments, segments, and events</p>
        </div>

        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-end gap-4 mb-4">
            <div className="flex-1 grid grid-cols-5 gap-4">
              {/* Filters remain the same but I'll include them for completeness */}
              <DropdownFilter
                label="Experiment"
                value={selectedExperiment ? selectedExperiment.name : null}
                placeholder="Select experiment"
                active={!!selectedExperiment}
                enabled={true}
              >
                <div className="w-80">
                  <div className="px-3 py-2 border-b border-gray-200">
                    <input
                      type="text"
                      placeholder="Search experiments..."
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="max-h-96 overflow-y-auto p-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2">Recently Modified</div>
                    <DropdownOption
                      label="Search Algorithm Update"
                      sublabel="Last modified 2 days ago"
                      checked={selectedExperiment?.name === "Search Algorithm Update"}
                      onClick={() => setSelectedExperiment({ name: "Search Algorithm Update", id: "exp1" })}
                    />
                    <DropdownOption
                      label="Dynamic Pricing Test"
                      sublabel="Last modified 3 days ago"
                      checked={selectedExperiment?.name === "Dynamic Pricing Test"}
                      onClick={() => setSelectedExperiment({ name: "Dynamic Pricing Test", id: "exp2" })}
                    />
                    
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 mt-2">Active</div>
                    <DropdownOption
                      label="Checkout Flow Redesign"
                      checked={selectedExperiment?.name === "Checkout Flow Redesign"}
                      onClick={() => setSelectedExperiment({ name: "Checkout Flow Redesign", id: "exp4" })}
                    />
                    <DropdownOption
                      label="Product Recommendations v2"
                      checked={selectedExperiment?.name === "Product Recommendations v2"}
                      onClick={() => setSelectedExperiment({ name: "Product Recommendations v2", id: "exp5" })}
                    />
                    
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 mt-2">Ended</div>
                    <DropdownOption
                      label="Payment Options Expansion"
                      checked={selectedExperiment?.name === "Payment Options Expansion"}
                      onClick={() => setSelectedExperiment({ name: "Payment Options Expansion", id: "exp7" })}
                    />
                  </div>
                </div>
              </DropdownFilter>

              <DropdownFilter
                label="Date Range"
                value={selectedDateRange === "Experiment duration" && selectedExperiment 
                  ? `${experimentData[selectedExperiment.name]?.duration || "Experiment duration"}` 
                  : selectedDateRange === "Custom" && customStartDate && customEndDate
                  ? `${customStartDate} - ${customEndDate}`
                  : selectedDateRange}
                placeholder="Date range"
                active={!!selectedDateRange}
                enabled={!!selectedExperiment}
              >
                <div className="w-64 p-2">
                  <DropdownOption label="Last 7 days" checked={selectedDateRange === "Last 7 days"} onClick={() => setSelectedDateRange("Last 7 days")} />
                  <DropdownOption label="Last 14 days" checked={selectedDateRange === "Last 14 days"} onClick={() => setSelectedDateRange("Last 14 days")} />
                  <DropdownOption label="Last 30 days" checked={selectedDateRange === "Last 30 days"} onClick={() => setSelectedDateRange("Last 30 days")} />
                  <DropdownOption 
                    label={selectedExperiment ? `Experiment duration (${experimentData[selectedExperiment.name]?.duration})` : "Experiment duration"} 
                    checked={selectedDateRange === "Experiment duration"} 
                    onClick={() => setSelectedDateRange("Experiment duration")} 
                  />
                  <DropdownOption label="Custom" checked={selectedDateRange === "Custom"} onClick={() => {
                    setSelectedDateRange("Custom");
                    setShowCustomDatePicker(true);
                  }} />
                </div>
              </DropdownFilter>

              <DropdownFilter
                label="Metrics"
                value={selectedMetrics.length > 0 ? `${selectedMetrics.length} metrics selected` : null}
                placeholder="Metrics"
                active={selectedMetrics.length > 0}
                enabled={!!selectedDateRange}
              >
                <div className="w-80 p-2 max-h-96 overflow-y-auto">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2">Primary Metrics</div>
                  <MetricOption label="Conversion Rate" change="+12.3%" positive={true} checked={selectedMetrics.includes("Conversion Rate")} onClick={() => toggleMetric("Conversion Rate")} />
                  <MetricOption label="Revenue per User" change="+8.7%" positive={true} checked={selectedMetrics.includes("Revenue per User")} onClick={() => toggleMetric("Revenue per User")} />
                  
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 mt-2">Secondary Metrics</div>
                  <MetricOption label="Session Duration" change="+15.2%" positive={true} checked={selectedMetrics.includes("Session Duration")} onClick={() => toggleMetric("Session Duration")} />
                  <MetricOption label="Bounce Rate" change="-5.1%" positive={true} checked={selectedMetrics.includes("Bounce Rate")} onClick={() => toggleMetric("Bounce Rate")} />
                  <MetricOption label="Cart Abandonment" change="-3.4%" positive={true} checked={selectedMetrics.includes("Cart Abandonment")} onClick={() => toggleMetric("Cart Abandonment")} />
                  <MetricOption label="Page Views" change="+22.8%" positive={true} checked={selectedMetrics.includes("Page Views")} onClick={() => toggleMetric("Page Views")} />
                </div>
              </DropdownFilter>

              <DropdownFilter
                label="Customer Segment"
                value={selectedSegment}
                placeholder="Customer segment"
                active={!!selectedSegment}
                enabled={selectedMetrics.length > 0}
              >
                <div className="w-64 p-2">
                  <DropdownOption label="All Customers" checked={selectedSegment === "All Customers"} onClick={() => setSelectedSegment("All Customers")} />
                  <DropdownOption label="New Customers" checked={selectedSegment === "New Customers"} onClick={() => setSelectedSegment("New Customers")} />
                  <DropdownOption label="Returning Customers" checked={selectedSegment === "Returning Customers"} onClick={() => setSelectedSegment("Returning Customers")} />
                  <DropdownOption label="Power Users" checked={selectedSegment === "Power Users"} onClick={() => setSelectedSegment("Power Users")} />
                  <DropdownOption label="At Risk" checked={selectedSegment === "At Risk"} onClick={() => setSelectedSegment("At Risk")} />
                </div>
              </DropdownFilter>

              {/* Comparison Segment Toggle */}
              {selectedSegment && (
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Compare Against (Optional)
                  </label>
                  <DropdownFilter
                    label=""
                    value={comparisonSegment}
                    placeholder="Select comparison segment"
                    active={!!comparisonSegment}
                    enabled={true}
                  >
                    <div className="w-64 p-2">
                      <DropdownOption 
                        label="None" 
                        sublabel="No comparison" 
                        checked={!comparisonSegment} 
                        onClick={() => setComparisonSegment(null)} 
                      />
                      {["All Customers", "New Customers", "Returning Customers", "Power Users", "At Risk"]
                        .filter(seg => seg !== selectedSegment)
                        .map(seg => (
                          <DropdownOption 
                            key={seg}
                            label={seg} 
                            checked={comparisonSegment === seg} 
                            onClick={() => setComparisonSegment(seg)} 
                          />
                        ))
                      }
                    </div>
                  </DropdownFilter>
                  {comparisonSegment && (
                    <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700">
                      <span className="font-medium">Comparing:</span> {selectedSegment} vs {comparisonSegment}
                    </div>
                  )}
                </div>
              )}

              <DropdownFilter
                label="Qualitative Insights"
                value={selectedSessionReplay ? "Session Replays" : null}
                placeholder="Qualitative insights"
                active={!!selectedSessionReplay}
                enabled={!!selectedSegment}
              >
                <div className="w-72 p-2">
                  <button 
                    onClick={() => setSelectedSessionReplay(selectedSessionReplay ? null : "Session Replays")}
                    className="w-full px-3 py-2 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${selectedSessionReplay ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                      {selectedSessionReplay && <span className="text-white text-xs">✓</span>}
                    </div>
                    <span className="text-sm font-medium text-gray-900">Session Replays</span>
                  </button>
                  <button 
                    disabled
                    className="w-full px-3 py-2 text-left flex items-center gap-3 cursor-not-allowed opacity-50"
                  >
                    <div className="w-4 h-4 rounded border-2 border-gray-300 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-500 border-b border-dotted border-gray-400">Auto user testing</span>
                    <span className="ml-auto text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">Coming Soon</span>
                  </button>
                </div>
              </DropdownFilter>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleRunAnalysis}
              disabled={!canRunAnalysis || loading}
              className={`px-8 py-3 rounded-lg font-semibold text-sm transition-all ${
                canRunAnalysis && !loading ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </span>
              ) : (
                'Run Analysis'
              )}
            </button>
          </div>
        </div>

        {/* Custom Date Picker Modal */}
        {showCustomDatePicker && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-96">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Custom Date Range</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowCustomDatePicker(false);
                    if (!customStartDate || !customEndDate) {
                      setSelectedDateRange(null);
                    }
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (customStartDate && customEndDate) {
                      setShowCustomDatePicker(false);
                    }
                  }}
                  disabled={!customStartDate || !customEndDate}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold ${
                    customStartDate && customEndDate
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Daily Metric Drilldown Modal */}
        {showDrilldownModal && drilldownData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white rounded-xl shadow-2xl" style={{ width: '90%', maxWidth: '1100px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 rounded-t-xl" style={{ flexShrink: 0 }}>
                <h2 className="text-xl font-bold text-gray-900">Daily Metric Drill Down</h2>
                <button 
                  onClick={() => setShowDrilldownModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="px-8 py-6 space-y-6" style={{ flex: 1, overflowY: 'auto' }}>
                {/* Date and Metric */}
                <div>
                  <div className="text-gray-500 text-sm mb-1">{drilldownData.date}</div>
                  <div className="text-xl font-semibold text-gray-900">{drilldownData.metric}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${drilldownData.changeDirection === 'increase' ? 'bg-green-50' : 'bg-red-50'}`}>
                      <svg className={`w-4 h-4 ${drilldownData.changeDirection === 'increase' ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={drilldownData.changeDirection === 'increase' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
                      </svg>
                      <span className={`font-semibold ${drilldownData.changeDirection === 'increase' ? 'text-green-700' : 'text-red-700'}`}>{drilldownData.change}</span>
                      <span className={`text-sm ${drilldownData.changeDirection === 'increase' ? 'text-green-600' : 'text-red-600'}`}>{drilldownData.changeDirection}</span>
                    </div>
                  </div>
                </div>

                {/* AI Daily Summary */}
                <div className="bg-purple-50 border border-purple-100 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h3 className="text-base font-semibold text-gray-900">AI Daily Summary</h3>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      Refine with AI
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{drilldownData.aiSummary}</p>
                  <div className="mt-3 text-xs text-gray-400">Powered by OpenAI</div>
                </div>

                {/* Key Drivers Today */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Drivers Today</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {drilldownData.keyDrivers.map((driver, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-semibold text-gray-900">{driver.title}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${driver.impact === 'high' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {driver.impact}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{driver.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Segment Shifts */}
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Segment Shifts</h3>
                  <div className="space-y-3">
                    {drilldownData.segmentShifts.map((segment, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{segment.name}</span>
                        <span className={`text-sm font-semibold ${segment.trending === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {segment.change}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">{drilldownData.segmentSummary}</p>
                </div>

                {/* Anomalies Detected */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Anomalies Detected</h3>
                  {drilldownData.anomalies.map((anomaly, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{anomaly.title}</h4>
                          <div className="text-xs text-gray-500 mt-1">{anomaly.time}</div>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          anomaly.severity === 'high' ? 'bg-red-100 text-red-700' : 
                          anomaly.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {anomaly.severity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{anomaly.description}</p>
                    </div>
                  ))}
                </div>

                {/* Related Historical Patterns */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Historical Patterns</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {drilldownData.historicalPatterns.map((pattern, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{pattern.name}</h4>
                        <p className="text-xs text-gray-600 mb-2">{pattern.description}</p>
                        <span className="text-sm font-semibold text-green-600">{pattern.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-xl" style={{ flexShrink: 0 }}>
                <button 
                  onClick={() => setShowDrilldownModal(false)}
                  className="px-6 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 hover:bg-green-100 font-medium transition-colors"
                >
                  Accept Insight
                </button>
                <button 
                  onClick={() => setShowDrilldownModal(false)}
                  className="px-6 py-2 bg-red-50 border border-red-200 rounded-lg text-red-700 hover:bg-red-100 font-medium transition-colors"
                >
                  Reject Insight
                </button>
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Export
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Ranked Hypotheses Detailed View Modal */}
        {showHypothesisModal && hypothesisDetailData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white rounded-xl shadow-2xl" style={{ width: '90%', maxWidth: '1100px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 rounded-t-xl" style={{ flexShrink: 0 }}>
                <h2 className="text-xl font-bold text-gray-900">Ranked Hypotheses Detailed View</h2>
                <button 
                  onClick={() => setShowHypothesisModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="px-8 py-6 space-y-6" style={{ flex: 1, overflowY: 'auto' }}>
                {/* AI Analysis */}
                <div className="bg-purple-50 border border-purple-100 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h3 className="text-base font-semibold text-gray-900">AI Analysis</h3>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      Refine with AI
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{hypothesisDetailData.aiAnalysis}</p>
                  <div className="mt-3 text-xs text-gray-400">Powered by OpenAI</div>
                </div>

                {/* Hypothesis Cards */}
                <div className="space-y-4">
                  {hypothesisDetailData.hypothesisCards.map((card, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
                      <h3 className="text-base font-semibold text-gray-900 mb-3">{card.title}</h3>
                      <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-600">{card.confidence}</span>
                        <span className="text-xs font-semibold text-gray-700">{card.confidencePercent}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            card.confidencePercent >= 80 ? 'bg-green-500' : 
                            card.confidencePercent >= 60 ? 'bg-yellow-500' : 
                            'bg-gray-400'
                          }`}
                          style={{ width: `${card.confidencePercent}%` }}
                        />
                      </div>
                      
                      <p className="text-xs text-gray-500 mt-2">{card.reason}</p>
                    </div>
                  ))}
                </div>

                {/* Evidence Breakdown */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-semibold text-gray-900">Evidence Breakdown</h3>
                    <button className="text-blue-600 hover:text-blue-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {Object.entries(hypothesisDetailData.evidenceBreakdown).map(([key, section]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-xl" style={{ flexShrink: 0 }}>
                <button 
                  onClick={() => setShowHypothesisModal(false)}
                  className="px-6 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 hover:bg-green-100 font-medium transition-colors"
                >
                  Accept Hypothesis
                </button>
                <button 
                  onClick={() => setShowHypothesisModal(false)}
                  className="px-6 py-2 bg-red-50 border border-red-200 rounded-lg text-red-700 hover:bg-red-100 font-medium transition-colors"
                >
                  Reject Hypothesis
                </button>
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Add to Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* AI Analysis Detail Modal */}
        {showAIAnalysisModal && aiAnalysisDetailData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white rounded-xl shadow-2xl" style={{ width: '90%', maxWidth: '900px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 rounded-t-xl" style={{ flexShrink: 0 }}>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{aiAnalysisDetailData.title}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full border font-medium ${
                      aiAnalysisDetailData.confidence === 'High' ? 'bg-green-50 text-green-700 border-green-200' :
                      aiAnalysisDetailData.confidence === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                      'bg-orange-50 text-orange-700 border-orange-200'
                    }`}>
                      {aiAnalysisDetailData.confidence} Confidence
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      aiAnalysisDetailData.impact === 'Positive' ? 'bg-green-50 text-green-700 border-green-200' :
                      aiAnalysisDetailData.impact === 'Negative' ? 'bg-red-50 text-red-700 border-red-200' :
                      'bg-gray-50 text-gray-700 border-gray-200'
                    }`}>
                      {aiAnalysisDetailData.impact} Impact
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowAIAnalysisModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="px-8 py-6 space-y-6" style={{ flex: 1, overflowY: 'auto' }}>
                {/* Main Description */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Analysis Summary</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{aiAnalysisDetailData.description}</p>
                </div>

                {/* Evidence Tags */}
                {aiAnalysisDetailData.evidenceTags && aiAnalysisDetailData.evidenceTags.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Supporting Evidence</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {aiAnalysisDetailData.evidenceTags.map((tag, idx) => (
                        <div key={idx} className="bg-white border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{tag}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expanded Evidence */}
                {aiAnalysisDetailData.expandedEvidence && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900">Detailed Evidence</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">📊 Session Data</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{aiAnalysisDetailData.expandedEvidence.sessionData}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">🔬 Methodology</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{aiAnalysisDetailData.expandedEvidence.methodology}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">📈 Historical Context</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{aiAnalysisDetailData.expandedEvidence.historicalContext}</p>
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                {aiAnalysisDetailData.expandedEvidence?.recommendations && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Recommended Actions</h3>
                    <div className="space-y-2">
                      {aiAnalysisDetailData.expandedEvidence.recommendations.map((rec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-blue-600 font-bold mt-0.5">→</span>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-xl" style={{ flexShrink: 0 }}>
                <button 
                  onClick={() => setShowAIAnalysisModal(false)}
                  className="px-6 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-200 font-medium transition-colors"
                >
                  Close
                </button>
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Add to Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Segment Differences Full Breakdown Modal */}
        {showSegmentModal && segmentDetailData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white rounded-xl shadow-2xl" style={{ width: '90%', maxWidth: '1100px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 rounded-t-xl" style={{ flexShrink: 0 }}>
                <h2 className="text-xl font-bold text-gray-900">Segment Differences Full Breakdown</h2>
                <button 
                  onClick={() => setShowSegmentModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="px-8 py-6 space-y-6" style={{ flex: 1, overflowY: 'auto' }}>
                {/* Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">{segmentDetailData.topSegment}</span> showed the largest deviation with a <span className={`font-semibold ${segmentDetailData.topChange.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{segmentDetailData.topChange} {segmentDetailData.topChange.startsWith('+') ? 'increase' : 'decrease'}</span>, {segmentDetailData.topChange.startsWith('+') ? 'positively' : 'negatively'} impacting the metric from {segmentDetailData.topOldValue} to {segmentDetailData.topNewValue}.
                  </p>
                </div>

                {/* Segment Breakdown Table */}
                <div>
                  <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                    <div className="grid grid-cols-4 gap-4 px-6 py-3 font-semibold text-sm text-gray-700">
                      <div>Segment Name</div>
                      <div className="text-center">Baseline Value</div>
                      <div className="text-center">New Value</div>
                      <div className="text-right">% Change</div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100 border-x border-b border-gray-200 rounded-b-lg">
                    {segmentDetailData.segmentBreakdown.map((segment, idx) => (
                      <div key={idx} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                        <div className="text-sm text-gray-900">{segment.name}</div>
                        <div className="text-sm text-gray-700 text-center">{segment.baseline}</div>
                        <div className="text-sm text-gray-700 text-center">{segment.newValue}</div>
                        <div className={`text-sm font-semibold text-right ${segment.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {segment.change}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why This Segment Shifted */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-semibold text-gray-900">Why This Segment Shifted</h3>
                    <span className="text-xs text-gray-400">Powered by OpenAI</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{segmentDetailData.aiExplanation}</p>
                  </div>
                </div>

                {/* Behavioral Evidence */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Behavioral Evidence</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {segmentDetailData.behavioralEvidence.map((evidence, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{evidence.title}</h4>
                        <p className="text-xs text-gray-500 mb-3">{evidence.subtitle}</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{evidence.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-between rounded-b-xl" style={{ flexShrink: 0 }}>
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export segment data
                </button>
                <div className="flex items-center gap-3">
                  <button 
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refine with AI
                  </button>
                  <button 
                    onClick={() => setShowSegmentModal(false)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Anomalies Detected Modal */}
        {showAnomalyModal && anomalyDetailData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white rounded-xl shadow-2xl" style={{ width: '90%', maxWidth: '1100px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 rounded-t-xl" style={{ flexShrink: 0 }}>
                <h2 className="text-xl font-bold text-gray-900">Anomalies Detected</h2>
                <button 
                  onClick={() => setShowAnomalyModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="px-8 py-6 space-y-6" style={{ flex: 1, overflowY: 'auto' }}>
                {/* Critical Alert */}
                {anomalyDetailData.showCriticalAlert && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-sm text-red-900">{anomalyDetailData.criticalMessage}</p>
                  </div>
                )}

                {/* Anomaly Cards */}
                <div className="space-y-4">
                  {anomalyDetailData.anomalyCards.map((card, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          card.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                          card.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {card.severity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{card.timestamp}</p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">{card.description}</p>
                      <div className="flex gap-2">
                        {card.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className={`text-xs px-3 py-1 rounded-full ${
                            tag === 'logs explorer' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                            tag === 'event pipeline' ? 'bg-green-50 text-green-700 border border-green-200' :
                            'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Impact Assessment */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Impact Assessment</h3>
                  <div className="bg-gray-50 rounded-lg p-5 space-y-4">
                    {anomalyDetailData.impactAssessment.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-sm text-gray-700 leading-relaxed">{paragraph}</p>
                    ))}
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-gray-400">Powered by {anomalyDetailData.impactAssessment.poweredBy}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-between rounded-b-xl" style={{ flexShrink: 0 }}>
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export
                </button>
                <div className="flex items-center gap-3">
                  <button 
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View related sessions
                  </button>
                  <button 
                    onClick={() => setShowAnomalyModal(false)}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mark as reviewed
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Behavioral Insights Detailed View Modal */}
        {showBehavioralModal && behavioralDetailData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white rounded-xl shadow-2xl" style={{ width: '90%', maxWidth: '1100px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 rounded-t-xl" style={{ flexShrink: 0 }}>
                <h2 className="text-xl font-bold text-gray-900">Behavioral Insights Detailed View</h2>
                <button 
                  onClick={() => setShowBehavioralModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="px-8 py-6 space-y-6" style={{ flex: 1, overflowY: 'auto' }}>
                {/* Dominant Pattern Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{behavioralDetailData.dominantPattern}</p>
                </div>

                {/* Behavior Pattern Cards */}
                <div className="space-y-4">
                  {behavioralDetailData.behaviorPatterns.map((pattern, idx) => {
                    // Last card is auto testing with "Coming Soon"
                    const isComingSoon = pattern.count.includes('auto testing');
                    const colorClasses = {
                      orange: 'bg-orange-50',
                      pink: 'bg-pink-50',
                      blue: 'bg-blue-50',
                      purple: 'bg-purple-50'
                    };
                    
                    return (
                      <div key={idx} className={`${colorClasses[pattern.color]} border border-gray-200 rounded-lg p-5 ${isComingSoon ? 'opacity-60' : ''}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-base font-semibold text-gray-900">{pattern.title}</h3>
                              <div className="flex items-center gap-2">
                                {isComingSoon && (
                                  <span className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded font-medium">Coming Soon</span>
                                )}
                                <span className="text-sm text-gray-500">{pattern.count}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">{pattern.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Linked Impact on Metrics */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Linked Impact on Metrics</h3>
                  <div className="bg-gray-50 rounded-lg p-5">
                    <p className="text-sm text-gray-700 leading-relaxed">{behavioralDetailData.linkedImpact}</p>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-end gap-3 rounded-b-xl" style={{ flexShrink: 0 }}>
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Open replays
                </button>
                <button 
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export insight
                </button>
                <button 
                  onClick={() => setShowBehavioralModal(false)}
                  className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-semibold"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refine with AI
                </button>
              </div>
            </div>
          </div>
        )}

        {analysisRun && (
          <div className="px-8 py-6">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-9">
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-semibold text-gray-900">Multi-Metric Analysis</h2>
                      <p className="text-sm text-gray-500">{selectedMetrics.length} metrics selected</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => setActiveView('graph')}
                          className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${activeView === 'graph' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          <BarChart3 className="w-4 h-4 inline mr-1" />
                          Graph
                        </button>
                        <button
                          onClick={() => setActiveView('table')}
                          className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${activeView === 'table' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          Table
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Graph or Table View */}
                  {activeView === 'graph' ? (
                    <>
                      <div className="p-6">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={currentData.metrics} onClick={handleDataPointClick}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                            <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                            <YAxis stroke="#9CA3AF" style={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #E5E7EB',
                                borderRadius: 8,
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                              }}
                            />
                            <Legend wrapperStyle={{ paddingTop: 20 }} iconType="circle" />
                            {getMetricsKeys().map((metric, idx) => (
                              <Line
                                key={metric.key}
                                type="monotone"
                                dataKey={metric.key}
                                stroke={metric.color}
                                strokeWidth={2}
                                dot={{ r: 3, fill: metric.color, strokeWidth: 0 }}
                                activeDot={{ r: 5, cursor: 'pointer' }}
                                name={metric.name}
                              />
                            ))}
                          </LineChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="px-6 pb-6">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Events</div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {currentData.events.map((event, idx) => (
                            <EventPill key={idx} {...event} />
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-2 border-gray-200 bg-gray-50">
                              <th className="text-center py-4 px-6 text-xs font-bold text-gray-700 uppercase tracking-wide">Date</th>
                              {selectedMetrics.map((metric) => (
                                <th key={metric} className="text-center py-4 px-6 text-xs font-bold text-gray-700 uppercase tracking-wide">
                                  {metric}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {currentData.metrics.map((row, idx) => (
                              <tr key={idx} className="hover:bg-blue-50 transition-colors">
                                <td className="py-4 px-6 text-center text-sm font-semibold text-gray-900">{row.date}</td>
                                {selectedMetrics.map((metric) => {
                                  const metricKey = {
                                    'Conversion Rate': 'conversion',
                                    'Revenue per User': 'revenue',
                                    'Session Duration': 'sessionDuration',
                                    'Bounce Rate': 'bounceRate',
                                    'Cart Abandonment': 'cartAbandonment',
                                    'Page Views': 'pageViews'
                                  }[metric];
                                  
                                  const value = row[metricKey];
                                  const isPercentage = metric.includes('Rate') || metric === 'Cart Abandonment';
                                  const isDuration = metric === 'Session Duration';
                                  const isRevenue = metric === 'Revenue per User';
                                  
                                  // Color coding for better visuals
                                  let textColor = 'text-gray-900';
                                  if (metric === 'Conversion Rate' && value > 55) textColor = 'text-green-600 font-semibold';
                                  if (metric === 'Bounce Rate' && value < 30) textColor = 'text-green-600 font-semibold';
                                  if (metric === 'Cart Abandonment' && value < 15) textColor = 'text-green-600 font-semibold';
                                  
                                  return (
                                    <td key={metric} className={`py-4 px-6 text-center text-sm ${textColor}`}>
                                      {isRevenue && '$'}
                                      {value}
                                      {isPercentage && '%'}
                                      {isDuration && 's'}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Table Summary Stats */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-3 gap-4">
                          {selectedMetrics.slice(0, 3).map((metric) => {
                            const metricKey = {
                              'Conversion Rate': 'conversion',
                              'Revenue per User': 'revenue',
                              'Session Duration': 'sessionDuration',
                              'Bounce Rate': 'bounceRate',
                              'Cart Abandonment': 'cartAbandonment',
                              'Page Views': 'pageViews'
                            }[metric];
                            
                            const values = currentData.metrics.map(row => row[metricKey]);
                            const avg = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
                            const isPercentage = metric.includes('Rate') || metric === 'Cart Abandonment';
                            const isDuration = metric === 'Session Duration';
                            const isRevenue = metric === 'Revenue per User';
                            
                            return (
                              <div key={metric} className="bg-gray-50 rounded-lg p-4 text-center">
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                  Avg {metric}
                                </div>
                                <div className="text-2xl font-bold text-gray-900">
                                  {isRevenue && '$'}
                                  {avg}
                                  {isPercentage && '%'}
                                  {isDuration && 's'}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-3">
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">Insights</h3>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {insightCategories
                      .filter(category => {
                        // Hide behavioral insights if no session replay is selected
                        if (category.id === 'behavioral' && !selectedSessionReplay) {
                          return false;
                        }
                        return true;
                      })
                      .map((category) => (
                      <InsightCategory
                        key={category.id}
                        category={category}
                        isExpanded={expandedInsight === category.id}
                        onToggle={() => toggleInsight(category.id)}
                        items={currentData.insights[category.id] || []}
                        onHypothesisClick={handleHypothesisClick}
                        onSegmentClick={handleSegmentClick}
                        onAnomalyClick={handleAnomalyClick}
                        onBehavioralClick={handleBehavioralClick}
                        onAIAnalysisClick={handleAIAnalysisClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Component definitions...
function DropdownFilter({ label, value, placeholder, active, enabled, children }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-2">{label}</label>
      <div className="relative">
        <button
          onClick={() => enabled && setOpen(!open)}
          disabled={!enabled}
          className={`w-full px-4 py-2.5 rounded-lg border text-left text-sm font-medium transition-colors ${
            enabled ? active ? 'border-gray-300 bg-white text-gray-900 hover:border-gray-400' : 'border-gray-300 bg-white text-gray-500 hover:border-gray-400' : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={active ? 'text-gray-900' : 'text-gray-500'}>{value || placeholder}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {open && enabled && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>
            <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
              {children}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function DropdownOption({ label, sublabel, checked, onClick }) {
  return (
    <button onClick={onClick} className="w-full px-3 py-2 hover:bg-gray-50 transition-colors text-left flex items-center gap-3">
      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
        {checked && <span className="text-white text-xs">✓</span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900">{label}</div>
        {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
      </div>
    </button>
  );
}

function MetricOption({ label, change, positive, checked, onClick }) {
  return (
    <button onClick={onClick} className="w-full px-3 py-2 hover:bg-gray-50 transition-colors text-left flex items-center gap-3">
      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
        {checked && <span className="text-white text-xs">✓</span>}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${positive ? change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
          {change}
        </span>
      </div>
    </button>
  );
}

function EventPill({ icon, date, label, color }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    red: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium ${colors[color]}`}>
      <span>{icon}</span>
      <span className="opacity-70">{date}</span>
      <span>·</span>
      <span>{label}</span>
    </div>
  );
}

function InsightCategory({ category, isExpanded, onToggle, items, onHypothesisClick, onSegmentClick, onAnomalyClick, onBehavioralClick, onAIAnalysisClick }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button onClick={onToggle} className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {category.name}
          </span>
        </div>
        <ChevronRight className={`w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
      
      {isExpanded && items.length > 0 && (
        <div className="px-5 pb-4">
          {category.id === 'aiAnalysis' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Powered by OpenAI</span>
                </div>
                <button className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refine explanation with AI
                </button>
              </div>
              {items.map((item, idx) => <AIAnalysisItem key={idx} item={item} onClick={() => onAIAnalysisClick(item)} />)}
            </div>
          )}
          {category.id === 'hypotheses' && (
            <div className="space-y-3">
              {items.map((item, idx) => <HypothesisItem key={idx} item={item} onClick={() => onHypothesisClick(item)} />)}
            </div>
          )}
          {category.id === 'segments' && (
            <div>
              <div className="space-y-1">
                {items.map((item, idx) => <SegmentItem key={idx} item={item} />)}
              </div>
              <div className="mt-4 text-right">
                <button 
                  onClick={onSegmentClick}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  View details →
                </button>
              </div>
            </div>
          )}
          {category.id === 'anomalies' && (
            <div className="space-y-3">
              {items.map((item, idx) => <AnomalyItem key={idx} item={item} onClick={() => onAnomalyClick(item)} />)}
            </div>
          )}
          {category.id === 'behavioral' && (
            <div className="space-y-3">
              {items.map((item, idx) => <BehavioralItem key={idx} item={item} onClick={onBehavioralClick} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AIAnalysisItem({ item, onClick }) {
  const impactColors = {
    Positive: 'bg-green-50 text-green-700 border-green-200',
    Negative: 'bg-red-50 text-red-700 border-red-200',
    Neutral: 'bg-gray-50 text-gray-700 border-gray-200'
  };

  const confidenceColors = {
    High: 'bg-green-50 text-green-700 border-green-200',
    Medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    Low: 'bg-orange-50 text-orange-700 border-orange-200'
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 space-y-2 relative">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
        <span className={`text-xs px-2 py-0.5 rounded-full border ${impactColors[item.impact]}`}>{item.impact}</span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
      
      {/* Confidence Score */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs text-gray-500">Confidence:</span>
        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${confidenceColors[item.confidence]}`}>
          {item.confidence}
        </span>
      </div>

      {/* Evidence Tags */}
      {item.evidenceTags && item.evidenceTags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.evidenceTags.map((tag, idx) => (
            <span 
              key={idx}
              className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="text-right pt-1">
        <button 
          onClick={onClick}
          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
        >
          View details →
        </button>
      </div>
    </div>
  );
}

function HypothesisItem({ item, onClick }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">{item.rank}</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900">{item.hypothesis}</h4>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xs font-medium text-blue-600">{item.likelihood} likely</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">{item.evidence}</p>
          <div className="mt-2 text-right">
            <button 
              onClick={onClick}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              View details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentItem({ item }) {
  const isPositive = item.change.startsWith('+');
  
  return (
    <div className={`flex items-center justify-between py-2 ${item.isComparison ? 'bg-blue-50 px-2 rounded-md border border-blue-200' : ''}`}>
      <div className="flex items-center gap-2">
        <svg className={`w-4 h-4 ${isPositive ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isPositive ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          )}
        </svg>
        <span className="text-sm text-gray-900">
          {item.segment}
          {item.isComparison && <span className="ml-2 text-xs font-medium text-blue-600">(Comparing)</span>}
        </span>
      </div>
      <span className={`text-sm font-semibold px-2 py-1 rounded ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {item.change}
      </span>
    </div>
  );
}

function AnomalyItem({ item, onClick }) {
  const severityColors = {
    High: 'bg-red-100 text-red-700 border-red-200',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Low: 'bg-blue-100 text-blue-700 border-blue-200'
  };

  const statusColors = {
    Resolved: 'bg-green-100 text-green-700',
    Investigated: 'bg-blue-100 text-blue-700',
    Monitoring: 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-500">{item.date}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full border ${severityColors[item.severity]}`}>{item.severity}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[item.status]}`}>{item.status}</span>
        </div>
      </div>
      <h4 className="text-sm font-semibold text-gray-900">{item.type}</h4>
      <p className="text-xs text-gray-600">{item.description}</p>
      <div className="text-right">
        <button 
          onClick={onClick}
          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
        >
          View details →
        </button>
      </div>
    </div>
  );
}

function BehavioralItem({ item, onClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-900">{item.type || 'Session replays'}</span>
            <span className="text-xs text-gray-500">• {item.count || '47 sessions'}</span>
          </div>
          <p className="text-sm text-gray-700">{item.behavior}</p>
          <div className="mt-2 text-right">
            <button 
              onClick={onClick}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              View details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component definitions...
function DropdownFilter({ label, value, placeholder, active, enabled, children }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-2">{label}</label>
      <div className="relative">
        <button
          onClick={() => enabled && setOpen(!open)}
          disabled={!enabled}
          className={`w-full px-4 py-2.5 rounded-lg border text-left text-sm font-medium transition-colors ${
            enabled ? active ? 'border-gray-300 bg-white text-gray-900 hover:border-gray-400' : 'border-gray-300 bg-white text-gray-500 hover:border-gray-400' : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={active ? 'text-gray-900' : 'text-gray-500'}>{value || placeholder}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </div>
        </button>
        {open && enabled && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>
            <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
              {children}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function DropdownOption({ label, sublabel, checked, onClick }) {
  return (
    <button onClick={onClick} className="w-full px-3 py-2 hover:bg-gray-50 transition-colors text-left flex items-center gap-3">
      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
        {checked && <span className="text-white text-xs">✓</span>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900">{label}</div>
        {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
      </div>
    </button>
  );
}

function MetricOption({ label, change, positive, checked, onClick }) {
  return (
    <button onClick={onClick} className="w-full px-3 py-2 hover:bg-gray-50 transition-colors text-left flex items-center gap-3">
      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
        {checked && <span className="text-white text-xs">✓</span>}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${positive ? change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
          {change}
        </span>
      </div>
    </button>
  );
}

function EventPill({ icon, date, label, color }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    red: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium ${colors[color]}`}>
      <span>{icon}</span>
      <span className="opacity-70">{date}</span>
      <span>·</span>
      <span>{label}</span>
    </div>
  );
}

function InsightCategory({ category, isExpanded, onToggle, items, onHypothesisClick, onSegmentClick, onAnomalyClick, onBehavioralClick }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button onClick={onToggle} className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{category.name}</span>
        </div>
        <ChevronRight className={`w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
      
      {isExpanded && items.length > 0 && (
        <div className="px-5 pb-4">
          {category.id === 'aiAnalysis' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Powered by OpenAI</span>
                </div>
                <button className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refine explanation with AI
                </button>
              </div>
              {items.map((item, idx) => <AIAnalysisItem key={idx} item={item} />)}
            </div>
          )}
          {category.id === 'hypotheses' && (
            <div className="space-y-3">
              {items.map((item, idx) => <HypothesisItem key={idx} item={item} onClick={() => onHypothesisClick(item)} />)}
            </div>
          )}
          {category.id === 'segments' && (
            <div>
              <div className="space-y-1">
                {items.map((item, idx) => <SegmentItem key={idx} item={item} />)}
              </div>
              <div className="mt-4 text-right">
                <button 
                  onClick={onSegmentClick}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  View details →
                </button>
              </div>
            </div>
          )}
          {category.id === 'anomalies' && (
            <div className="space-y-3">
              {items.map((item, idx) => <AnomalyItem key={idx} item={item} onClick={() => onAnomalyClick(item)} />)}
            </div>
          )}
          {category.id === 'behavioral' && (
            <div className="space-y-3">
              {items.map((item, idx) => <BehavioralItem key={idx} item={item} onClick={onBehavioralClick} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AIAnalysisItem({ item }) {
  const impactColors = {
    Positive: 'bg-green-50 text-green-700 border-green-200',
    Negative: 'bg-red-50 text-red-700 border-red-200',
    Neutral: 'bg-gray-50 text-gray-700 border-gray-200'
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 space-y-2 relative">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
        <span className={`text-xs px-2 py-0.5 rounded-full border ${impactColors[item.impact]}`}>{item.impact}</span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed pr-16">{item.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Confidence:</span>
          <span className="text-xs font-medium text-gray-700">{item.confidence}</span>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          View details →
        </button>
      </div>
    </div>
  );
}

function HypothesisItem({ item, onClick }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">{item.rank}</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900">{item.hypothesis}</h4>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xs font-medium text-blue-600">{item.likelihood} likely</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">{item.evidence}</p>
          <div className="mt-2 text-right">
            <button 
              onClick={onClick}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              View details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentItem({ item }) {
  const isPositive = item.change.startsWith('+');
  
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <svg className={`w-4 h-4 ${isPositive ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isPositive ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          )}
        </svg>
        <span className="text-sm text-gray-900">{item.segment}</span>
      </div>
      <span className={`text-sm font-semibold px-2 py-1 rounded ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {item.change}
      </span>
    </div>
  );
}

function AnomalyItem({ item, onClick }) {
  const severityColors = {
    High: 'bg-red-100 text-red-700 border-red-200',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Low: 'bg-blue-100 text-blue-700 border-blue-200'
  };

  const statusColors = {
    Resolved: 'bg-green-100 text-green-700',
    Investigated: 'bg-blue-100 text-blue-700',
    Monitoring: 'bg-yellow-100 text-yellow-700'
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 space-y-2">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-gray-500">{item.date}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full border ${severityColors[item.severity]}`}>{item.severity}</span>
          </div>
          <h4 className="text-sm font-semibold text-gray-900">{item.type}</h4>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[item.status]}`}>{item.status}</span>
      </div>
      <p className="text-xs text-gray-600">{item.description}</p>
      <div className="text-right">
        <button 
          onClick={onClick}
          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
        >
          View details →
        </button>
      </div>
    </div>
  );
}

function BehavioralItem({ item, onClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-900">{item.type || 'Session replays'}</span>
            <span className="text-xs text-gray-500">• {item.count || '47 sessions'}</span>
          </div>
          <p className="text-sm text-gray-700">{item.behavior}</p>
          <div className="mt-2 text-right">
            <button 
              onClick={onClick}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              View details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Case Study Component

const AppendixProductConcepts = () => {
  const [expandedId, setExpandedId] = useState(null);

  const products = [
    {
      id: 'auto-blueprint',
      category: 'Experiment Planning',
      title: 'Auto-Generated Experiment Blueprint',
      description: 'Helps PMs turn a hypothesis into a structured experiment plan. Suggests default metrics and guardrails, calculates required sample size and runtime, and surfaces similar past experiments for context.'
    },
    {
      id: 'risk-scoring',
      category: 'Risk Assessment',
      title: 'Contextual Risk Scoring',
      description: 'Helps PMs and engineers assess rollout risk before launch by evaluating exposure steps, dependency features, metric volatility, problematic segments, and prior incidents. Surfaces top three risks with recommended mitigation steps.'
    },
    {
      id: 'cross-product',
      category: 'Cross-Product Analysis',
      title: 'Cross-Product Tracking',
      description: 'Identifies cross-product dependencies by correlating metric changes across products, including shared backend or UX components. Alerts only trigger when correlation strength exceeds a threshold to reduce noise.'
    },
    {
      id: 'metric-templates',
      category: 'Metrics Management',
      title: 'Metric Templates Library',
      description: 'Provides pre-built metric templates for adoption, activation, retention, and funnel drop-off. Users can customize definitions and publish to a shared org-wide catalog with version history and team ownership.'
    },
    {
      id: 'dynamic-exp',
      category: 'Experiment Optimization',
      title: 'Dynamic Experimentation',
      description: 'Allows PMs to safely adjust live experiments by adding guardrails, expanding segments, or adjusting duration. Uses Sequential Testing Engine to enforce statistical validity while maintaining full auditability.'
    },
    {
      id: 'control-tower',
      category: 'Strategy Hub',
      title: 'Experiment Control Tower',
      description: 'Provides a real-time, centralized dashboard of all in-flight experiments across teams, products, markets, and segments. Flags potential collisions and provides health snapshots including sample size and p-values.'
    },
    {
      id: 'leaderboard',
      category: 'Strategy Hub',
      title: 'Product Leaderboard',
      description: 'Ranks highest-impact experiments and rollouts across customizable KPIs. Analyzes all experiments, standardizes lifts with confidence intervals, and supports cost-benefit scoring to highlight valuable initiatives.'
    },
    {
      id: 'ideation-copilot',
      category: 'Strategy Hub',
      title: 'Experiment Ideation Copilot',
      description: 'Generates experiment ideas based on historical data, funnel drop-offs, segment trends, and past failed guardrails. Recommends types of experiments with expected lift ranges, variance, and risk levels.'
    },
    {
      id: 'competitor',
      category: 'Strategy Hub',
      title: 'Competitor Research',
      description: 'Generates experiment ideas inspired by competitor activity through aggregated and anonymized metrics. Categorizes updates by theme and links them to potential experiments while maintaining ethical data practices.'
    },
    {
      id: 'decision-tree',
      category: 'Strategy Hub',
      title: 'Experiment Decision Tree Planner',
      description: 'Maps initial hypotheses, branching experiments, and fallback paths into a dynamic decision tree. Tracks completed, active, and future experiments while connecting learnings to inform future decisions.'
    },
    {
      id: 'auto-prd',
      category: 'Strategy Hub',
      title: 'Auto-Generated PRDs',
      description: 'Produces structured post-experiment reports immediately after experiments conclude. Pulls metadata, winning variant behavior, qualitative insights, and system logs to populate key sections including context, goals, results, and implications.'
    },
    {
      id: 'learning-graph',
      category: 'Strategy Hub',
      title: 'Learning Graph',
      description: 'Visualizes how experiments build on each other over time. Each experiment is a node with edges indicating relationships like follow-up or inspired by. Analyzes metadata to detect relationships and automatically link experiments.'
    },
    {
      id: 'auto-testing',
      category: 'Behavioral Intelligence Hub',
      title: 'Auto-Pilot User Testing',
      description: 'Runs automated usability sessions in parallel with live experiments. Runs synthetic heuristic evaluations, predicts user task flows, and identifies potential usability issues with optional human testing through integrated partners.'
    },
    {
      id: 'session-replay',
      category: 'Behavioral Intelligence Hub',
      title: 'AI Session Replay Intelligence',
      description: 'Automatically analyzes all session replays to identify friction points, drop-offs, unexpected clicks, and looping behaviors. Detects common behavior clusters and correlates patterns with metric changes.'
    },
    {
      id: 'root-cause',
      category: 'Behavioral Intelligence Hub',
      title: 'Root Cause Explorer',
      description: 'Helps PMs understand why experiment results didn\'t match hypothesis by surfacing behavioral anomalies, segment differences, and unexpected friction points. Aggregates qualitative inputs into unified themes linked to experiments.'
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      {products.map((product) => (
        <div key={product.id} style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <button
            onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
            style={{
              width: '100%',
              padding: '1.5rem',
              background: 'transparent',
              border: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#2563eb',
                marginBottom: '0.5rem',
                letterSpacing: '0.05em'
              }}>
                {product.category}
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1f2937'
              }}>
                {product.title}
              </div>
            </div>
            <div style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              transform: expandedId === product.id ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}>
              ▼
            </div>
          </button>
          {expandedId === product.id && (
            <div style={{
              padding: '0 1.5rem 1.5rem 1.5rem',
              borderTop: '1px solid #e5e7eb'
            }}>
              <p style={{
                fontSize: '0.938rem',
                lineHeight: 1.7,
                color: '#4b5563',
                margin: '1rem 0 0 0'
              }}>
                {product.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const StatsigCaseStudy = () => {
  const [mvpRoadmapOpen, setMvpRoadmapOpen] = React.useState(false);
  const [openaiDemoOpen, setOpenaiDemoOpen] = React.useState(false);
  const [flowchartOpen, setFlowchartOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('problem');

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 4rem',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <path d="M20 2 L35 12 L35 28 L20 38 L5 28 L5 12 Z" fill="#2C3E50"/>
            <circle cx="10" cy="28" r="2" fill="white"/>
            <path d="M10 28 L16 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="18" r="2" fill="white"/>
            <path d="M16 18 L22 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="22" cy="24" r="2" fill="white"/>
            <path d="M22 24 L30 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="30" cy="12" r="2" fill="white"/>
          </svg>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#1f2937',
            letterSpacing: '0.02em'
          }}>
            STATSIG
          </span>
        </div>
      </nav>

      <div style={{ paddingTop: '80px' }}>
        
        {/* Hero */}
        <section style={{
          padding: '6rem 4rem 4rem 4rem',
          background: '#ffffff'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: '100px',
              marginBottom: '2rem'
            }}>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#2563eb'
              }}>
                Product Design Case Study
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#1f2937',
              marginBottom: '2rem',
              fontFamily: "'Inter', sans-serif"
            }}>
              Change Intelligence
            </h1>

            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.7,
              color: '#4b5563',
              marginBottom: '3rem',
              maxWidth: '900px'
            }}>
              AI-enhanced analysis that automatically surfaces meaningful metric movements, anomalies, and insights across experiments
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}>
              {[
                { label: 'ROLE', content: 'Lead Product Manager' },
                { label: 'TIMELINE', content: 'November - December 2025' },
                { label: 'TEAM', content: '1 Product Manager' }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  background: 'rgba(37, 99, 235, 0.08)',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#2563eb',
                    marginBottom: '0.5rem'
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#1f2937'
                  }}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div style={{
              borderTop: '1px solid #e5e7eb',
              marginTop: '3rem',
              paddingTop: '1rem',
              display: 'flex',
              gap: '0',
              overflowX: 'auto'
            }}>
              {[
                { id: 'problem', label: 'Problem' },
                { id: 'research', label: 'Research' },
                { id: 'insights', label: 'Key Insights' },
                { id: 'opportunity', label: 'Opportunity Selection' },
                { id: 'design', label: 'Design Process' },
                { id: 'appendix', label: 'Appendix' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '2px solid #2563eb' : '2px solid transparent',
                    color: activeTab === tab.id ? '#2563eb' : '#6b7280',
                    fontSize: '0.875rem',
                    fontWeight: activeTab === tab.id ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseOver={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.color = '#1f2937';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.color = '#6b7280';
                    }
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section style={{
          padding: '6rem 4rem',
          background: '#f9fafb',
          display: activeTab === 'problem' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '0.813rem',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              PROBLEM
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#1f2937',
              marginBottom: '2rem'
            }}>
              How might we help teams spend less time analyzing and more time building?
            </h2>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: '#4b5563'
            }}>
              Teams were drowning in experiment data. Every metric movement required manual investigation, anomalies went unnoticed, and critical insights were buried in noise. PMs spent 10+ hours per week diagnosing metric shifts, toggling between 7+ tools, and struggling to understand why results didn't match expectations.
            </p>
          </div>
        </section>

        {/* RESEARCH */}
        <section style={{
          padding: '6rem 4rem',
          background: '#ffffff',
          display: activeTab === 'research' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '0.813rem',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              RESEARCH
            </div>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#4b5563',
              marginBottom: '4rem'
            }}>
              I combined qualitative interviews and quantitative surveys to understand how PMs run experiments and where their tooling falls short.
            </p>

            {/* Effort 1: Qualitative Interviews Screenshot */}
            <div style={{
              marginBottom: '3rem',
              padding: '3rem',
              background: '#f9fafb',
              borderRadius: '12px'
            }}>
              <div style={{
                marginBottom: '2rem'
              }}>
                <div style={{
                  fontSize: '0.813rem',
                  fontWeight: 700,
                  color: '#2563eb',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em'
                }}>
                  EFFORT 1
                </div>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Qualitative Interviews
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4b5563'
                }}>
                  I interviewed PMs from Meta, Google, Cloudflare, Shopify, Amazon, TikTok, Carta, and more to understand how they run experiments today. I found these PMs through LinkedIn cold outreach and Leland, a coaching platform.
                </p>
              </div>
              <div style={{
                padding: '1rem',
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                borderRadius: '8px'
              }}>
                <img 
                  src="data:image/png;base64,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"
                  alt="Qualitative interview research spreadsheet"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Effort 2: Quantitative Survey Screenshot */}
            <div style={{
              marginBottom: '4rem',
              padding: '3rem',
              background: '#f9fafb',
              borderRadius: '12px'
            }}>
              <div style={{
                marginBottom: '2rem'
              }}>
                <div style={{
                  fontSize: '0.813rem',
                  fontWeight: 700,
                  color: '#64748b',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em'
                }}>
                  EFFORT 2
                </div>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  Quantitative Survey
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4b5563',
                  marginBottom: '1.5rem'
                }}>
                  To complement the interviews, I created a structured survey that measured the importance and satisfaction of fifteen experimentation capabilities. 42 PMs participated, rating each capability on a 1-5 scale.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    { label: 'Respondents', value: '42', sublabel: 'Product Managers' },
                    { label: 'Capabilities', value: '15', sublabel: 'Features tested' },
                    { label: 'Rating Scale', value: '1-5', sublabel: 'Importance & Satisfaction' }
                  ].map((stat, i) => (
                    <div key={i} style={{
                      padding: '1.5rem',
                      background: '#ffffff',
                      borderRadius: '6px',
                      textAlign: 'center',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#64748b',
                        marginBottom: '0.5rem'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontSize: '0.813rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '0.25rem'
                      }}>
                        {stat.label}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#6b7280'
                      }}>
                        {stat.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{
                padding: '1rem',
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                borderRadius: '8px'
              }}>
                <img 
                  src="data:image/png;base64,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"
                  alt="Quantitative survey research spreadsheet"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* KEY INSIGHTS */}
        <section style={{
          padding: '6rem 4rem',
          background: '#f9fafb',
          display: activeTab === 'insights' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '0.813rem',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              KEY INSIGHTS
            </div>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#4b5563',
              marginBottom: '4rem'
            }}>
              I synthesized research findings to pinpoint diagnosis, interpretation, and decision-making as the primary sources of friction.
            </p>

            {/* Problem and Solution Space Exploration */}
            <div style={{
              marginBottom: '4rem'
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#1f2937'
              }}>
                Problem and Solution Space Exploration
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#6b7280',
                marginBottom: '2rem'
              }}>
                I distilled all research inputs into key problem statements from the PM's point of view, with corresponding solution ideas for each.
              </p>
              
              <ProblemSpaceDropdowns />
            </div>
          </div>
        </section>

        {/* OPPORTUNITY SELECTION */}
        <section style={{
          padding: '6rem 4rem',
          background: '#ffffff',
          display: activeTab === 'opportunity' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '0.813rem',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              OPPORTUNITY SELECTION
            </div>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#4b5563',
              marginBottom: '4rem'
            }}>
              I used a quantitative ranking framework to prioritize opportunities by impact and feasibility, then validated the selection through customer quotes and strategic fit with Statsig's existing product suite.
            </p>

            {/* Prioritization Methodology */}
            <div style={{
              marginBottom: '3rem',
              padding: '3rem',
              background: '#f9fafb',
              borderRadius: '12px'
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#1f2937'
              }}>
                Prioritization Methodology
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: '2.5rem'
              }}>
                From the survey of 42 PMs, I calculated four key scores for each product concept:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
              }}>
                {[
                  {
                    metric: 'Gap',
                    formula: 'Importance - Satisfaction',
                    desc: 'Measures the delta between what PMs need vs. what current tools provide'
                  },
                  {
                    metric: 'Opportunity Score',
                    formula: 'Importance + Max(Importance - Satisfaction, 0)',
                    desc: 'Combines need intensity with gap size to identify high-impact opportunities'
                  },
                  {
                    metric: 'Customer Value Delivered',
                    formula: 'Importance × Satisfaction',
                    desc: 'Shows how much value current solutions deliver to users today'
                  },
                  {
                    metric: 'Opportunity',
                    formula: 'Importance - Customer Value Delivered',
                    desc: 'Calculates the untapped potential by removing current value from total need'
                  }
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '2rem',
                    background: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '1rem'
                    }}>
                      {item.metric}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontFamily: 'monospace',
                      color: '#2563eb',
                      padding: '0.75rem',
                      background: 'rgba(37, 99, 235, 0.08)',
                      borderRadius: '6px',
                      marginBottom: '1rem'
                    }}>
                      {item.formula}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: '#6b7280'
                    }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Ranking Results */}
            <div style={{
              padding: '3rem',
              background: '#f9fafb',
              borderRadius: '12px',
              marginBottom: '4rem'
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '2rem',
                color: '#1f2937'
              }}>
                Stack Ranking Results
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem'
              }}>
                {[
                  { name: 'Change Intelligence', gap: '2.17', opp: '6.17', value: '0.29', oppScore: '3.71', winner: true },
                  { name: 'Auto-Generated User Testing', gap: '1.92', opp: '6.42', value: '0.47', oppScore: '4.04' },
                  { name: 'Cross-Product Tracking', gap: '1.75', opp: '6.00', value: '0.43', oppScore: '3.83' },
                  { name: 'Product Leaderboard', gap: '2.00', opp: '6.25', value: '0.38', oppScore: '3.87' }
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '2rem',
                    background: item.winner ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                    border: item.winner ? '2px solid #2563eb' : '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}>
                    {item.winner && (
                      <div style={{
                        fontSize: '0.813rem',
                        fontWeight: 700,
                        color: '#2563eb',
                        marginBottom: '1rem'
                      }}>
                        WINNER
                      </div>
                    )}
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '1.5rem'
                    }}>
                      {item.name}
                    </div>
                    <div style={{
                      fontSize: '0.813rem',
                      color: '#6b7280',
                      display: 'grid',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <span>Gap</span>
                        <span style={{ fontWeight: 600, color: '#1f2937' }}>{item.gap}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <span>Opp Score</span>
                        <span style={{ fontWeight: 600, color: '#1f2937' }}>{item.opp}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <span>Value</span>
                        <span style={{ fontWeight: 600, color: '#1f2937' }}>{item.value}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <span>Opportunity</span>
                        <span style={{ fontWeight: 600, color: '#1f2937' }}>{item.oppScore}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Quote */}
            <div style={{
              padding: '3rem',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: '12px',
              marginBottom: '2rem'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#2563eb',
                marginBottom: '1rem',
                letterSpacing: '0.05em'
              }}>
                KEY CUSTOMER INSIGHT
              </div>
              <p style={{
                fontSize: '1.25rem',
                lineHeight: 1.6,
                color: '#1f2937',
                margin: 0,
                fontFamily: 'Georgia, serif'
              }}>
                "It can be very difficult to understand why a metric changed even when you know that it changed, because isolating the root cause requires manual investigation. If this was automated, it would be <strong>incredibly valuable</strong> and an <strong>absolute game-changer</strong>."
              </p>
            </div>

            {/* Why Change Intelligence Won */}
            <div style={{
              padding: '3rem',
              background: '#ffffff',
              borderRadius: '12px',
              marginBottom: '3rem'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#1f2937'
              }}>
                Why Change Intelligence
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#4b5563',
                marginBottom: '1.5rem'
              }}>
                Change Intelligence showed an importance-satisfaction gap of 2.17 and an opportunity score of 6.17, translating into a net customer value opportunity of 3.71, a significant opportunity among all evaluated products. While some products scored higher on pure opportunity metrics, they also had higher customer value delivered scores, meaning there was less opportunity to deliver additional value for customers. Change Intelligence's notably lower baseline customer value delivered (0.29) represented the greatest potential to improve customer value. This prioritization reflects Statsig's commitment to building with the customer in mind: I focused on the top four products by opportunity score, then selected the one with the most room to meaningfully increase customer value.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#4b5563'
              }}>
                It also builds directly on Statsig's existing Change Alerts feature, which notifies PMs when metrics move. While Change Alerts answers what changed, Change Intelligence addresses why it changed. Auto-User Testing Engine scored as the next logical product step with a strong opportunity score based on market demand, but was deprioritized in favor of Change Intelligence which delivered higher immediate customer value despite similar opportunity metrics.
              </p>
            </div>
          </div>
        </section>

        {/* DESIGN PROCESS */}
        <section style={{
          padding: '6rem 4rem',
          background: '#f9fafb',
          display: activeTab === 'design' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '0.813rem',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              DESIGN PROCESS
            </div>

            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: '#4b5563',
              marginBottom: '4rem'
            }}>
              I translated the selected opportunity into a concrete product experience through sketches, prototypes, and an interactive MVP.
            </p>

            <div style={{
              display: 'grid',
              gap: '3rem'
            }}>
              {/* Hand-Drawn Wireframes */}
              <div style={{
                padding: '3rem',
                background: '#ffffff',
                borderRadius: '12px'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: '#1f2937'
                }}>
                  Hand-Drawn Wireframes
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#6b7280',
                  marginBottom: '2rem'
                }}>
                  Quick hand sketches to map out core functionality required for Change Intelligence. The goal was clarity: capturing every component needed, understanding how users would move from Change Alerts into a deeper diagnostic flow, and sketching the structure of the insights pop-up. The arrows in the drawing point to card designs I created for each insight section - these cards detail what specific insights would appear in the pop-up modals and how they'd be structured.
                </p>
                <div style={{
                  padding: '1rem',
                  background: '#ffffff',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px'
                }}>
                  <img 
                    src="data:image/jpeg;base64,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7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9sEzF+xIxt5xCdp6DQDiz2wTMX7EjG3nEI9s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AAAAAAAAAAAAAAAAAAAAAAAAAADirhS/n4Mg/tOt/HMO1TirhS/n4Mg/tOt/HMA7VAAAAAAABjLR+b3D7YX+RDJmMtH5vcPthf5EMmB5rhcKW1UNTcq+VIqakhfPM9d6NY1FVy/eRFIPgDPLL7MZytsN12OMp2V1L0SxYei6N66MqI9rTaY5dyc/eJtdqLpja6y3pp/TNPJDv5Oyaqb/AAnIWYfAtx5mxT4borlji24WiwZROoaDoKkWtdVIkrJI3uc9Y1i2VY1NE2k1TXvAdS9XmCosVrgVMQUTb70E+5rQo/s0pmyNY6TtaI97U5ddV5DM01yoayFtRTVUckTnK1r0duVUXRU8KHIlHwBEqcX2/Gt+zAqVr5rLHT3x1KkjHV11axutYj0emy1z2MesSJsrs6LymGx1wYuFJBY6fDuD80m1tJT1r67b3U70q3OfJHUNam5rI3rosWqo/aTXcmgHbMksUKIs0jWIq7KbS6aqXJ+Q4JxHkTw3MV5P2m25h5pVF2xC+90FU2C20kMbqKJkbpH8a9qtR2krY27Sa6IqroqHT+QUOcVup8TWHNumkm6X3VyWa5vqmSLXUjtVRdlqIrNhdG797tdd3IBtoFNd2oQCoBRV0AqAAAAAAAAAAAAAAADj6u/RQqL7mEn88YdgnH1d+ihUX3MJP54w7BAGBveCMPYhrWXC6Usj544+Ka9kz2djrrp2KoZ4ARPrX4P+J1PncvrDrX4P+J1PncvrEsAET61+D/idT53L6w61+D/idT53L6xLABE+tfg74lUedy+sOtfg74lUedy+sSwARTrYYP8AiVR53L6w62GD/iVR53L6xKwBE+tfg74lUedy+sOtfg74lUedy+sSwARPrX4P+JVHncvrDrX4P+JVHncvrEsAET61+D/iVR53L6w61+DviNR53L6xLABE+tfg74jUedy+sV62GDviE/nUvrErAEU62GDviE/nUvrDrYYO+IT+dS+sSsARTrYYO+IT+dS+sU61+DviNR53L6xLABE+tfg74hP51J6w61+DfiE/nUvrEsAET61+DfiE/nUvrFethg74hP51L6xKwBFOthg74hP51L6xTrX4N+IT+dS+sSwARTrYYO+IT+dS+sU61+DviM3nUnrEsAEU62GDviE3nUnrDrYYO+ITedSesSsARTrYYO+ITedSesU61+De583n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TTQ3P7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ3NxF9FVHqAdmA4z9tJyE7m4i+iqj1B7aTkJ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"
                    alt="Hand-drawn wireframes"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              </div>

              {/* Early Figma Prototype */}
              <div style={{
                padding: '3rem',
                background: '#ffffff',
                borderRadius: '12px'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: '#1f2937'
                }}>
                  Early Figma Prototype
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#6b7280',
                  marginBottom: '2rem'
                }}>
                  Once the structure was clear, I created a rough Figma layout to define the basic flow. This version established the core screens but didn't include detailed product decisions yet. It served as a canvas where I could start testing how the filters, insights, and modal system would fit together visually.
                </p>
                <InteractiveFigmaPrototype />
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Prototype */}
        <section style={{
          padding: '3rem 4rem',
          background: '#ffffff',
          display: activeTab === 'design' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '0.813rem',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              
            </div>

            <h4 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Final Interactive Prototype
            </h4>

            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#6b7280',
              marginBottom: '2rem'
            }}>
              After establishing the structure through rough Figma layouts, I coded this interactive prototype with Claude to test the actual product experience. This allowed me to iterate on the design in real-time, refining the filter behavior, modal interactions, and insight presentations as I built. Coding the prototype helped surface UX decisions that static mockups couldn't reveal.
            </p>

            {/* Context Note */}
            <div style={{
              background: '#f0f9ff',
              border: '1px solid #bae6fd',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#0369a1',
                marginBottom: '0.75rem'
              }}>
                Product Context
              </div>
              <div style={{
                fontSize: '0.938rem',
                lineHeight: 1.7,
                color: '#0c4a6e'
              }}>
                Sidebar navigation elements are taken directly from Statsig's existing product to show where Change Intelligence would integrate within Analytics, alongside their current Change Alerts feature. Only the Change Intelligence workflow is interactive.
              </div>
            </div>

            <div style={{
              padding: '2rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <ChangeIntelligence />
            </div>
          </div>
        </section>

        {/* How Users Are Introduced */}
        <section style={{
          padding: '1rem 4rem 3rem 4rem',
          background: '#ffffff',
          display: activeTab === 'design' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: '8px'
            }}>
              <h5 style={{
                fontSize: '0.938rem',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                How Users Are Introduced to the Feature
              </h5>
              <p style={{
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: '#4b5563',
                margin: 0
              }}>
                Change Intelligence is introduced through existing Change Alerts. When an alert fires, it offers a path into Change Intelligence for deeper diagnostic analysis. Once traction builds, users will migrate to using it independently, but this is the early go-to-market path.
              </p>
            </div>
          </div>
        </section>

        {/* Appendix */}
        <section style={{
          padding: '6rem 4rem',
          background: '#ffffff',
          display: activeTab === 'appendix' ? 'block' : 'none'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '0.813rem',
              fontWeight: 700,
              color: '#2563eb',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              APPENDIX
            </div>

            <h3 style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              marginBottom: '2rem',
              color: '#1f2937'
            }}>
              Additional Resources
            </h3>

            {/* Research Data Spreadsheet */}
            <div style={{
              marginBottom: '4rem',
              padding: '2.5rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                Full Research Data & Analysis
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: '1.5rem'
              }}>
                View the complete survey data, problem statements, solution ideas, and prioritization scores that informed this project.
              </p>
              <a 
                href="https://docs.google.com/spreadsheets/d/1Gq9roI8_FpN8F-8_dXGpyg4b5cv3268S4VwHxuSL1PI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 1.5rem',
                  background: '#2563eb',
                  color: '#ffffff',
                  borderRadius: '6px',
                  fontSize: '0.938rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.target.style.background = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.background = '#2563eb'}
              >
                View Research Spreadsheet →
              </a>
            </div>

            {/* PM Survey */}
            <div style={{
              marginBottom: '4rem',
              padding: '2.5rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                PM Importance & Satisfaction Survey
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: '1.5rem'
              }}>
                The survey used to gather importance and satisfaction ratings from 42 PMs across 15 experimentation capabilities. This data directly informed the prioritization framework.
              </p>
              <a 
                href="https://forms.gle/i4nsGeQ8Kk2La4sZ7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 1.5rem',
                  background: '#2563eb',
                  color: '#ffffff',
                  borderRadius: '6px',
                  fontSize: '0.938rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.target.style.background = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.background = '#2563eb'}
              >
                View Survey →
              </a>
            </div>

            {/* Key Design Decisions */}
            <KeyDesignDecisionsDropdown />

            {/* User Flow Diagram */}
            <div style={{
              marginTop: '4rem',
              marginBottom: '4rem',
              padding: '2.5rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <div 
                onClick={() => setFlowchartOpen(!flowchartOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  marginBottom: flowchartOpen ? '2rem' : '0'
                }}
              >
                <div>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: '#1f2937'
                  }}>
                    Interactive Prototype User Flow
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#4b5563',
                    margin: 0
                  }}>
                    Complete user journey flowchart from landing to AI-powered insights generation.
                  </p>
                </div>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#6b7280"
                  style={{
                    transform: flowchartOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    marginLeft: '1rem',
                    flexShrink: 0
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {flowchartOpen && (
              <div>
                {/* Explanation */}
                <div style={{
                  padding: '1.5rem',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  marginBottom: '2rem'
                }}>
                  <h5 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    How to Read This Flowchart
                  </h5>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#93c5fd',
                        border: '2px solid #60a5fa',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}></div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>
                          Circles
                        </div>
                        <div style={{ fontSize: '0.813rem', color: '#6b7280' }}>
                          Start and end points
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '60px',
                        height: '40px',
                        background: '#dbeafe',
                        border: '2px solid #60a5fa',
                        borderRadius: '4px',
                        flexShrink: 0
                      }}></div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>
                          Rectangles
                        </div>
                        <div style={{ fontSize: '0.813rem', color: '#6b7280' }}>
                          User actions or system processes
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        position: 'relative',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <div style={{
                          width: '35px',
                          height: '35px',
                          background: '#93c5fd',
                          border: '2px solid #60a5fa',
                          transform: 'rotate(45deg)'
                        }}></div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>
                          Diamonds
                        </div>
                        <div style={{ fontSize: '0.813rem', color: '#6b7280' }}>
                          Decision points (Yes/No choices)
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <svg width="60" height="40" viewBox="0 0 60 40">
                        <path d="M 5 20 L 55 20" stroke="#60a5fa" strokeWidth="2" fill="none" markerEnd="url(#arrowSmall)"/>
                        <defs>
                          <marker id="arrowSmall" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#60a5fa"/>
                          </marker>
                        </defs>
                      </svg>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>
                          Arrows
                        </div>
                        <div style={{ fontSize: '0.813rem', color: '#6b7280' }}>
                          Direction of flow
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flowchart SVG - Improved */}
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '3rem 2rem',
                  overflow: 'auto'
                }}>
                  <svg width="1100" height="750" viewBox="0 0 1100 750" style={{ maxWidth: '100%', height: 'auto' }}>
                    {/* Start Circle */}
                    <circle cx="120" cy="80" r="65" fill="#93c5fd" stroke="#60a5fa" strokeWidth="3"/>
                    <text x="120" y="78" textAnchor="middle" fill="#1e3a8a" fontSize="15" fontWeight="700" fontFamily="Arial, sans-serif">Land on</text>
                    <text x="120" y="96" textAnchor="middle" fill="#1e3a8a" fontSize="15" fontWeight="700" fontFamily="Arial, sans-serif">Dashboard</text>

                    {/* Arrow */}
                    <path d="M 185 80 L 255 80" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Select Experiment */}
                    <rect x="255" y="45" width="150" height="70" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" rx="6"/>
                    <text x="330" y="75" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">Select</text>
                    <text x="330" y="93" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">Experiment</text>

                    {/* Arrow */}
                    <path d="M 405 80 L 475 80" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Choose Filters Decision */}
                    <path d="M 550 45 L 605 80 L 550 115 L 495 80 Z" fill="#93c5fd" stroke="#60a5fa" strokeWidth="3"/>
                    <text x="550" y="78" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Select</text>
                    <text x="550" y="94" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">filters?</text>

                    {/* Yes path */}
                    <text x="625" y="75" fill="#60a5fa" fontSize="14" fontWeight="700">Yes</text>
                    <path d="M 605 80 L 675 80" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Choose Filters */}
                    <rect x="675" y="35" width="160" height="90" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" rx="6"/>
                    <text x="755" y="62" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Select Metrics,</text>
                    <text x="755" y="80" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Segments, and</text>
                    <text x="755" y="98" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Date Range</text>

                    {/* No path */}
                    <text x="555" y="135" fill="#60a5fa" fontSize="14" fontWeight="700">No</text>
                    <path d="M 550 115 L 550 180 L 755 180 L 755 125" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Arrow down */}
                    <path d="M 755 125 L 755 165" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Run Analysis */}
                    <rect x="675" y="165" width="160" height="70" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" rx="6"/>
                    <text x="755" y="195" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">Click "Run</text>
                    <text x="755" y="213" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">Analysis"</text>

                    {/* Arrow down */}
                    <path d="M 755 235 L 755 295" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* AI Processing */}
                    <rect x="675" y="295" width="160" height="70" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="3" rx="6"/>
                    <text x="755" y="318" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">AI Generates</text>
                    <text x="755" y="336" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Insights via</text>
                    <text x="755" y="354" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">OpenAI GPT-4</text>

                    {/* Arrow down */}
                    <path d="M 755 365 L 755 425" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Display Results */}
                    <rect x="655" y="425" width="200" height="95" fill="#dbeafe" stroke="#60a5fa" strokeWidth="3" rx="6"/>
                    <text x="755" y="452" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">Display Results:</text>
                    <text x="755" y="472" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontFamily="Arial, sans-serif">• Metric Trend Charts</text>
                    <text x="755" y="488" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontFamily="Arial, sans-serif">• AI-Generated Analysis</text>
                    <text x="755" y="504" textAnchor="middle" fill="#1e3a8a" fontSize="12" fontFamily="Arial, sans-serif">• Ranked Hypotheses</text>

                    {/* Arrow down */}
                    <path d="M 755 520 L 755 575" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Explore Details Decision */}
                    <path d="M 550 545 L 605 580 L 550 615 L 495 580 Z" fill="#93c5fd" stroke="#60a5fa" strokeWidth="3"/>
                    <text x="550" y="578" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Explore</text>
                    <text x="550" y="594" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">details?</text>

                    {/* Yes to modals */}
                    <text x="450" y="575" fill="#60a5fa" fontSize="14" fontWeight="700">Yes</text>
                    <path d="M 495 580 L 395 580" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* Modal Options */}
                    <rect x="195" y="545" width="200" height="70" fill="#f0f9ff" stroke="#60a5fa" strokeWidth="3" rx="6"/>
                    <text x="295" y="567" textAnchor="middle" fill="#1e3a8a" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">Open Detail Modals:</text>
                    <text x="295" y="586" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontFamily="Arial, sans-serif">Hypotheses, Segments,</text>
                    <text x="295" y="601" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontFamily="Arial, sans-serif">Anomalies, Behaviors</text>

                    {/* Loop back */}
                    <path d="M 195 580 L 140 580 L 140 445 L 655 445" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="8,4" markerEnd="url(#arrowGray)"/>
                    <text x="75" y="505" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">Continue</text>
                    <text x="75" y="520" fill="#6b7280" fontSize="11" fontFamily="Arial, sans-serif">exploring</text>

                    {/* No - to End */}
                    <text x="625" y="605" fill="#60a5fa" fontSize="14" fontWeight="700">No</text>
                    <path d="M 605 590 L 900 590" stroke="#60a5fa" strokeWidth="3" fill="none" markerEnd="url(#arrow)"/>

                    {/* End Circle */}
                    <circle cx="975" cy="590" r="65" fill="#93c5fd" stroke="#60a5fa" strokeWidth="3"/>
                    <text x="975" y="585" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">Export or</text>
                    <text x="975" y="603" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">Share Insights</text>

                    {/* Arrow markers */}
                    <defs>
                      <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 12 3.5, 0 7" fill="#60a5fa"/>
                      </marker>
                      <marker id="arrowGray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#9ca3af"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>
              )}
            </div>

            {/* MVP Roadmap */}
            <div style={{
              marginBottom: '4rem',
              padding: '2.5rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <div 
                onClick={() => setMvpRoadmapOpen(!mvpRoadmapOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  marginBottom: mvpRoadmapOpen ? '2rem' : '0'
                }}
              >
                <div>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: '#1f2937'
                  }}>
                    Change Intelligence MVP Roadmap
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#4b5563',
                    margin: 0
                  }}>
                    Phased feature development plan to iteratively deliver value while validating core assumptions with users.
                  </p>
                </div>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#6b7280"
                  style={{
                    transform: mvpRoadmapOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    marginLeft: '1rem',
                    flexShrink: 0
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {mvpRoadmapOpen && (
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr 200px',
                  gap: 0,
                  borderBottom: '2px solid #e5e7eb',
                  background: '#f9fafb'
                }}>
                  <div style={{
                    padding: '1rem 1.5rem',
                    fontSize: '0.813rem',
                    fontWeight: 700,
                    color: '#6b7280',
                    letterSpacing: '0.05em'
                  }}>
                    VERSION
                  </div>
                  <div style={{
                    padding: '1rem 1.5rem',
                    fontSize: '0.813rem',
                    fontWeight: 700,
                    color: '#6b7280',
                    letterSpacing: '0.05em',
                    borderLeft: '1px solid #e5e7eb'
                  }}>
                    FEATURES
                  </div>
                  <div style={{
                    padding: '1rem 1.5rem',
                    fontSize: '0.813rem',
                    fontWeight: 700,
                    color: '#6b7280',
                    letterSpacing: '0.05em',
                    borderLeft: '1px solid #e5e7eb'
                  }}>
                    GOAL
                  </div>
                </div>

                {[
                  {
                    version: 'V1',
                    color: '#22c55e',
                    features: [
                      'Basic metric change detection',
                      'Simple hypothesis generation',
                      'Manual refresh for insights'
                    ],
                    goal: 'Validate core value proposition'
                  },
                  {
                    version: 'V1.1',
                    color: '#2563eb',
                    features: [
                      'Automatic change monitoring',
                      'Segment-level analysis',
                      'Confidence scoring for hypotheses'
                    ],
                    goal: 'Improve insight accuracy'
                  },
                  {
                    version: 'V2',
                    color: '#64748b',
                    features: [
                      'Integration with session replay',
                      'Correlation with rollouts & experiments',
                      'Historical pattern matching'
                    ],
                    goal: 'Add behavioral context'
                  },
                  {
                    version: 'V3',
                    color: '#f59e0b',
                    features: [
                      'Predictive anomaly detection',
                      'Cross-product impact analysis',
                      'Auto-generated investigation reports',
                      'Integration with alerting workflows'
                    ],
                    goal: 'Enable proactive insights'
                  }
                ].map((phase, i) => (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr 200px',
                    gap: 0,
                    borderBottom: i < 3 ? '1px solid #e5e7eb' : 'none'
                  }}>
                    <div style={{
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        padding: '0.5rem 1rem',
                        background: `${phase.color}15`,
                        color: phase.color,
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: 700
                      }}>
                        {phase.version}
                      </div>
                    </div>
                    <div style={{
                      padding: '1.5rem',
                      borderLeft: '1px solid #e5e7eb'
                    }}>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}>
                        {phase.features.map((feature, j) => (
                          <div key={j} style={{
                            fontSize: '0.875rem',
                            color: '#4b5563',
                            lineHeight: 1.6
                          }}>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      padding: '1.5rem',
                      borderLeft: '1px solid #e5e7eb',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        fontStyle: 'italic'
                      }}>
                        {phase.goal}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>

            {/* OpenAI Integration Demo - SEPARATE SECTION */}
            <div style={{
              marginTop: '4rem',
              padding: '2.5rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <div 
                onClick={() => setOpenaiDemoOpen(!openaiDemoOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  marginBottom: openaiDemoOpen ? '2rem' : '0'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem'
                  }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1f2937',
                      margin: 0
                    }}>
                      OpenAI-Powered Analysis Prototype
                    </h4>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.375rem 0.75rem',
                      background: '#10a37f',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#ffffff'
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                      </svg>
                      OpenAI Integration
                    </div>
                  </div>
                  
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#4b5563',
                    margin: 0
                  }}>
                    Given Statsig's recent acquisition by OpenAI, I built a functional prototype demonstrating how GPT-4 can generate contextual experiment insights in real-time based on user-selected filters and data.
                  </p>
                </div>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#6b7280"
                  style={{
                    transform: openaiDemoOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    marginLeft: '1rem',
                    flexShrink: 0
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {openaiDemoOpen && (
              <div>
              {/* Dashboard Screenshot Showing OpenAI Generation */}
              <div style={{
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}>
                {/* Browser Chrome */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: '#f3f4f6',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <div style={{ display: 'flex', gap: '0.375rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#64748b' }}></div>
                  </div>
                  <div style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    fontFamily: 'monospace'
                  }}>
                    localhost:3000/change-intelligence
                  </div>
                </div>

                {/* Dashboard Content */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Header */}
                  <div style={{
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.25rem' }}>
                      Change Intelligence Dashboard
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      AI-powered experiment analysis • Powered by OpenAI GPT-4
                    </div>
                  </div>

                  {/* Filters */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: '#f9fafb',
                    borderRadius: '6px'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>Experiment</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937' }}>Search Algorithm Update</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>Segment</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937' }}>Power Users</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>Metrics</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1f2937' }}>Conversion, Revenue</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <div style={{
                        padding: '0.5rem 1rem',
                        background: '#2563eb',
                        color: '#ffffff',
                        borderRadius: '4px',
                        fontSize: '0.813rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        width: '100%'
                      }}>
                        ✓ Analysis Complete
                      </div>
                    </div>
                  </div>

                  {/* AI Analysis Section - MAIN FOCUS */}
                  <div style={{
                    background: '#ffffff',
                    border: '2px solid #10a37f',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#10a37f">
                          <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                        </svg>
                        <span style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#1f2937'
                        }}>
                          AI-Generated Insights
                        </span>
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#ffffff',
                        background: '#10a37f',
                        padding: '0.375rem 0.875rem',
                        borderRadius: '20px',
                        fontWeight: 600
                      }}>
                        GPT-4 Turbo
                      </div>
                    </div>

                    <div style={{
                      borderTop: '1px solid #e5e7eb',
                      paddingTop: '1.5rem',
                      marginTop: '1rem',
                      fontSize: '0.938rem',
                      lineHeight: 1.7,
                      color: '#1f2937'
                    }}>
                      <p style={{ margin: '0 0 1rem 0' }}>
                        <strong>The Power Users segment is showing exceptional response to the search algorithm update.</strong> Conversion rates have increased by 23% over the baseline period, with particularly strong performance during peak usage hours (2-5pm EST). This suggests the improved relevance scoring is effectively surfacing products that match experienced users' sophisticated search patterns.
                      </p>
                      <p style={{ margin: '0 0 1rem 0' }}>
                        Query response time improvements (180ms → 95ms) are driving a virtuous cycle: faster results lead to more search iterations, which exposes users to more relevant products, ultimately driving the conversion lift. The segment's higher tolerance for complexity means they're benefiting most from the enhanced long-tail query understanding.
                      </p>
                      <p style={{ margin: 0 }}>
                        <strong>Recommendation:</strong> Roll out to 50% of Power Users immediately to capture revenue impact while monitoring for any quality degradation at scale. Consider developing a "Power Search" mode that exposes additional filters for this segment, leveraging their demonstrated willingness to engage with more complex interfaces.
                      </p>
                    </div>
                  </div>

                  {/* Hypotheses Section */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem'
                  }}>
                    <div style={{
                      padding: '1rem',
                      background: '#f0f9ff',
                      border: '2px solid #0ea5e9',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#0369a1',
                          letterSpacing: '0.05em'
                        }}>
                          #1 HYPOTHESIS
                        </div>
                        <div style={{
                          fontSize: '0.688rem',
                          fontWeight: 600,
                          color: '#475569',
                          background: '#d1fae5',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '12px'
                        }}>
                          High Confidence
                        </div>
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#1f2937',
                        lineHeight: 1.5,
                        fontWeight: 500
                      }}>
                        Algorithm relevance scoring drives engagement in experienced users
                      </div>
                    </div>
                    <div style={{
                      padding: '1rem',
                      background: '#fefce8',
                      border: '2px solid #eab308',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#a16207',
                          letterSpacing: '0.05em'
                        }}>
                          #2 HYPOTHESIS
                        </div>
                        <div style={{
                          fontSize: '0.688rem',
                          fontWeight: 600,
                          color: '#d97706',
                          background: '#fed7aa',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '12px'
                        }}>
                          Med Confidence
                        </div>
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#1f2937',
                        lineHeight: 1.5,
                        fontWeight: 500
                      }}>
                        Reduced latency creates exploratory search behavior
                      </div>
                    </div>
                    <div style={{
                      padding: '1rem',
                      background: '#f9fafb',
                      border: '2px solid #d1d5db',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#6b7280',
                          letterSpacing: '0.05em'
                        }}>
                          #3 HYPOTHESIS
                        </div>
                        <div style={{
                          fontSize: '0.688rem',
                          fontWeight: 600,
                          color: '#6b7280',
                          background: '#e5e7eb',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '12px'
                        }}>
                          Med Confidence
                        </div>
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#1f2937',
                        lineHeight: 1.5,
                        fontWeight: 500
                      }}>
                        Long-tail query understanding unlocks niche conversions
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Implementation Details */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '2rem',
                marginBottom: '1.5rem'
              }}>
                <h5 style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  marginBottom: '2rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid #e5e7eb'
                }}>
                  Technical Implementation
                </h5>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '3rem'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1.25rem'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: '#10a37f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.125rem'
                      }}>
                        ⚙️
                      </div>
                      <h6 style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#374151',
                        margin: 0
                      }}>
                        How It Works
                      </h6>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}>
                      {[
                        'User selects experiment, segment, metrics, and date range',
                        'System queries experiment data from SQLite database',
                        'Structured prompt sent to OpenAI GPT-4 Turbo API with context',
                        'AI generates tailored insights, hypotheses, and recommendations',
                        'Results rendered in dashboard with real-time visualization'
                      ].map((step, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          gap: '0.75rem',
                          alignItems: 'flex-start'
                        }}>
                          <div style={{
                            minWidth: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: '#dbeafe',
                            color: '#1e40af',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            marginTop: '0.125rem'
                          }}>
                            {idx + 1}
                          </div>
                          <div style={{
                            fontSize: '0.875rem',
                            lineHeight: 1.6,
                            color: '#4b5563',
                            flex: 1
                          }}>
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1.25rem'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.125rem'
                      }}>
                        🛠️
                      </div>
                      <h6 style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#374151',
                        margin: 0
                      }}>
                        Technical Stack
                      </h6>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}>
                      {[
                        { label: 'Frontend', value: 'React with Recharts visualization' },
                        { label: 'Backend', value: 'Node.js/Express REST API' },
                        { label: 'Database', value: 'SQLite with experiment metrics' },
                        { label: 'AI', value: 'OpenAI GPT-4 Turbo (gpt-4-turbo-preview)' },
                        { label: 'Deployment', value: 'Standalone HTML application' }
                      ].map((item, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem'
                        }}>
                          <div style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#6b7280',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                          }}>
                            {item.label}
                          </div>
                          <div style={{
                            fontSize: '0.875rem',
                            lineHeight: 1.6,
                            color: '#1f2937',
                            fontWeight: 500
                          }}>
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Link */}
              <div style={{
                padding: '1.5rem',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#1f2937',
                    marginBottom: '0.25rem'
                  }}>
                    Download Interactive Prototype
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    Requires OpenAI API key • Works offline after initial load
                  </div>
                </div>
                <a 
                  href="/statsig-dashboard-fixed.html"
                  download
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#10a37f',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.938rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Download Dashboard →
                </a>
              </div>
              </div>
              )}
            </div>

            {/* Other Product Concepts */}
            <div style={{
              marginTop: '4rem',
              padding: '2.5rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                Other Product Concepts Explored
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: '1.5rem'
              }}>
                Beyond Change Intelligence, I developed 10+ additional product concepts during the research phase. These concepts span three strategic areas:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2rem',
                padding: '1.5rem',
                background: '#ffffff',
                borderRadius: '8px'
              }}>
                <div style={{
                  padding: '1rem',
                  borderLeft: '3px solid #2563eb',
                  background: '#f9fafb',
                  borderRadius: '4px'
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#2563eb',
                    marginBottom: '0.5rem'
                  }}>
                    Strategy Hub
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: '#4b5563'
                  }}>
                    Tools that help teams prioritize high-impact experiments, track portfolio performance, and plan strategic experimentation paths
                  </div>
                </div>
                <div style={{
                  padding: '1rem',
                  borderLeft: '3px solid #64748b',
                  background: '#f9fafb',
                  borderRadius: '4px'
                }}>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#64748b',
                    marginBottom: '0.5rem'
                  }}>
                    Behavioral Intelligence Hub
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: '#4b5563'
                  }}>
                    Features that surface qualitative user behavior insights to complement quantitative experiment metrics
                  </div>
                </div>
              </div>
              
              <AppendixProductConcepts />
            </div>

            {/* Other Prototypes Explored */}
            <div style={{
              marginTop: '4rem',
              padding: '2.5rem',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#1f2937'
              }}>
                Other Prototypes Explored
              </h4>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4b5563',
                marginBottom: '2rem'
              }}>
                In addition to Change Intelligence, I explored and prototyped several other product concepts to address different pain points identified in user research.
              </p>

              <div style={{
                display: 'grid',
                gap: '1.5rem'
              }}>
                {/* Auto-User Testing Engine */}
                <div style={{
                  padding: '2rem',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}>
                  <h5 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '0.75rem'
                  }}>
                    Auto-User Testing Engine
                  </h5>
                  <p style={{
                    fontSize: '0.938rem',
                    lineHeight: 1.6,
                    color: '#6b7280',
                    marginBottom: '1.25rem'
                  }}>
                    Automated qualitative user testing that generates structured feedback on experiment variants without manual recruitment or moderation.
                  </p>
                  <a 
                    href="https://www.figma.com/make/lfeVeJy2FRHmIWNSuqmudS/Behavior-Intelligence-Hub-Interface?t=uPAscjV2c7jLBRTz-20&fullscreen=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.625rem 1.25rem',
                      background: '#dbeafe',
                      color: '#1e3a8a',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#bfdbfe'}
                    onMouseOut={(e) => e.target.style.background = '#dbeafe'}
                  >
                    View Prototype →
                  </a>
                </div>

                {/* Cross-Product Tracking */}
                <div style={{
                  padding: '2rem',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}>
                  <h5 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '0.75rem'
                  }}>
                    Cross-Product Tracking
                  </h5>
                  <p style={{
                    fontSize: '0.938rem',
                    lineHeight: 1.6,
                    color: '#6b7280',
                    marginBottom: '1.25rem'
                  }}>
                    Unified experiment tracking across multiple products and platforms to understand holistic user behavior and cross-product impact.
                  </p>
                  <a 
                    href="https://www.figma.com/make/tYCEnIfa4zHq2gM4te0MKp/Cross-Product-Tracking-Interface?t=THT4BT6DELmya4bo-20&fullscreen=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.625rem 1.25rem',
                      background: '#dbeafe',
                      color: '#1e3a8a',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#bfdbfe'}
                    onMouseOut={(e) => e.target.style.background = '#dbeafe'}
                  >
                    View Prototype →
                  </a>
                </div>

                {/* Product Leaderboard */}
                <div style={{
                  padding: '2rem',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}>
                  <h5 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '0.75rem'
                  }}>
                    Product Leaderboard
                  </h5>
                  <p style={{
                    fontSize: '0.938rem',
                    lineHeight: 1.6,
                    color: '#6b7280',
                    marginBottom: '1.25rem'
                  }}>
                    Gamified experiment performance tracking that ranks experiments by impact, helping teams identify and learn from high-performing tests.
                  </p>
                  <a 
                    href="https://www.figma.com/make/A0IS0lauhE5TfBOC1zTnAN/Product-Leaderboard-Interface?t=W9ytF85FJXJghSRf-20&fullscreen=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '0.625rem 1.25rem',
                      background: '#dbeafe',
                      color: '#1e3a8a',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#bfdbfe'}
                    onMouseOut={(e) => e.target.style.background = '#dbeafe'}
                  >
                    View Prototype →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatsigCaseStudy;
