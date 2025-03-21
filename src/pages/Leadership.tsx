import React from 'react';
import CodeLine from '../components/CodeLine';

const Leadership = () => {
  const technicalLeadership = [
    'Act as the go-to expert for all things iOS',
    'Drive the technical direction of projects and influence architectural decisions',
    'Lead the development of new features and improvements to existing ones',
    'Champion clean, maintainable code in a CI/CD environment',
    'Promote and uphold modern testing practices'
  ];

  const individualContributor = [
    'Build robust, scalable iOS applications for a global user base',
    'Work hands-on with modern technologies including SwiftUI, MVVM, Combine, and various APIs',
    'Ensure high performance, responsiveness, and a smooth user experience'
  ];

  const teamMentorship = [
    'Mentor and guide a small team of engineers',
    'Foster a culture of collaboration, continuous learning, and technical excellence',
    'Drive best practices and help grow the capabilities of the team'
  ];

  return (
    <div className="pl-8 pr-8 py-8">
      <div className="max-w-4xl mx-auto">
        <CodeLine number={1}>
          <span className="comment">// How I drive excellence and build high-performing teams through three key pillars</span>
        </CodeLine>

        <CodeLine number={2}></CodeLine>

        <CodeLine number={3}>
          <span className="keyword">const</span> <span className="function">technicalLeadership</span> = [
        </CodeLine>

        <CodeLine number={4} indent={1}>
          <span className="string">'Act as the go-to expert for all things iOS'</span>,
        </CodeLine>

        <CodeLine number={5} indent={1}>
          <span className="string">'Drive the technical direction of projects and influence architectural decisions'</span>,
        </CodeLine>

        <CodeLine number={6} indent={1}>
          <span className="string">'Lead the development of new features and improvements to existing ones'</span>,
        </CodeLine>

        <CodeLine number={7} indent={1}>
          <span className="string">'Champion clean, maintainable code in a CI/CD environment'</span>,
        </CodeLine>

        <CodeLine number={8} indent={1}>
          <span className="string">'Promote and uphold modern testing practices'</span>
        </CodeLine>

        <CodeLine number={9}>];
        </CodeLine>

        <CodeLine number={10}></CodeLine>

        <CodeLine number={11}>
          <span className="keyword">const</span> <span className="function">individualContributor</span> = [
        </CodeLine>

        <CodeLine number={12} indent={1}>
          <span className="string">'Build robust, scalable iOS applications for a global user base'</span>,
        </CodeLine>

        <CodeLine number={13} indent={1}>
          <span className="string">'Work hands-on with modern technologies including SwiftUI, MVVM, Combine, and various APIs'</span>,
        </CodeLine>

        <CodeLine number={14} indent={1}>
          <span className="string">'Ensure high performance, responsiveness, and a smooth user experience'</span>
        </CodeLine>

        <CodeLine number={15}>];
        </CodeLine>

        <CodeLine number={16}></CodeLine>

        <CodeLine number={17}>
          <span className="keyword">const</span> <span className="function">teamMentorship</span> = [
        </CodeLine>

        <CodeLine number={18} indent={1}>
          <span className="string">'Mentor and guide a small team of engineers'</span>,
        </CodeLine>

        <CodeLine number={19} indent={1}>
          <span className="string">'Foster a culture of collaboration, continuous learning, and technical excellence'</span>,
        </CodeLine>

        <CodeLine number={20} indent={1}>
          <span className="string">'Drive best practices and help grow the capabilities of the team'</span>
        </CodeLine>

        <CodeLine number={21}>];
        </CodeLine>

        <CodeLine number={22}></CodeLine>

        <CodeLine number={23}>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-[var(--vscode-function)] flex items-center gap-2 text-lg mb-4">
                🔧 Technical Leadership
              </h3>
              <ul className="space-y-2 text-[var(--vscode-text)]">
                {technicalLeadership.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--vscode-string)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[var(--vscode-function)] flex items-center gap-2 text-lg mb-4">
                💻 Individual Contributor (IC) Work
              </h3>
              <ul className="space-y-2 text-[var(--vscode-text)]">
                {individualContributor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--vscode-string)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[var(--vscode-function)] flex items-center gap-2 text-lg mb-4">
                🤝 Team Mentorship
              </h3>
              <ul className="space-y-2 text-[var(--vscode-text)]">
                {teamMentorship.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--vscode-string)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CodeLine>
      </div>
    </div>
  );
};

export default Leadership;